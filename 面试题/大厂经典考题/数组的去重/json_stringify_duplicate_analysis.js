// JSON.stringify 数组去重的弊端分析

// 先看一个使用 JSON.stringify 进行数组去重的示例实现
function uniqueWithStringify(arr) {
  const seen = new Set();
  return arr.filter(item => {
    const key = JSON.stringify(item);
    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }
    return false;
  });
}

// 测试示例
const testArray = [
  {name: '张三', age: 18, like: {name: '篮球'}},
  {name: '张三', age: 19 },
  {name: '张三', age: 18, like: {name: '篮球'}},
  {name: '张三', age: 18 },
  {name: '张三', age: 18 },
  {name: '张三', age: 18 }
];

console.log('使用 JSON.stringify 去重结果:', uniqueWithStringify(testArray));

// JSON.stringify 数组去重的弊端分析

/**
 * 弊端1: 对象属性顺序问题
 * JSON.stringify 会根据对象属性的枚举顺序生成字符串
 * 如果两个对象包含相同的属性但顺序不同，会被认为是不同的对象
 */
const obj1 = {a: 1, b: 2};
const obj2 = {b: 2, a: 1};
console.log('obj1 和 obj2 属性顺序不同但内容相同:');
console.log('JSON.stringify(obj1):', JSON.stringify(obj1)); // {"a":1,"b":2}
console.log('JSON.stringify(obj2):', JSON.stringify(obj2)); // {"b":2,"a":1} - 注意顺序不同
console.log('视为相同对象?', JSON.stringify(obj1) === JSON.stringify(obj2)); // false

/**
 * 弊端2: 特殊值处理问题
 * JSON.stringify 会忽略 undefined, Function, Symbol 类型的值
 * 还会将 NaN, Infinity, null 转换为 null
 */
const obj3 = {a: undefined, b: function(){}, c: Symbol('test')};
const obj4 = {};
console.log('\nobj3 包含特殊值，obj4 为空对象:');
console.log('JSON.stringify(obj3):', JSON.stringify(obj3)); // {}
console.log('JSON.stringify(obj4):', JSON.stringify(obj4)); // {}
console.log('视为相同对象?', JSON.stringify(obj3) === JSON.stringify(obj4)); // true，但实际上它们不同

const obj5 = {a: NaN};
const obj6 = {a: null};
console.log('\nobj5 包含 NaN，obj6 包含 null:');
console.log('JSON.stringify(obj5):', JSON.stringify(obj5)); // {"a":null}
console.log('JSON.stringify(obj6):', JSON.stringify(obj6)); // {"a":null}
console.log('视为相同对象?', JSON.stringify(obj5) === JSON.stringify(obj6)); // true，但实际上它们不同

/**
 * 弊端3: 循环引用问题
 * JSON.stringify 无法处理包含循环引用的对象，会抛出错误
 */
const obj7 = {name: '循环引用'};
const obj8 = {ref: obj7};
obj7.ref = obj8;
console.log('\n尝试处理循环引用对象:');
try {
  JSON.stringify(obj7);
} catch (e) {
  console.log('错误:', e.message); // Converting circular structure to JSON
}

/**
 * 弊端4: 性能问题
 * 对于大型数组和复杂对象，JSON.stringify 和 JSON.parse 会消耗大量性能
 */
const largeArray = Array(10000).fill({id: 1, value: 'test'});
console.time('JSON.stringify 去重');
uniqueWithStringify(largeArray);
console.timeEnd('JSON.stringify 去重');

/**
 * 弊端5: 嵌套对象的处理
 * 嵌套对象的深度和复杂度会影响去重的准确性和性能
 */
const nestedObj1 = {a: {b: {c: 1}}};
const nestedObj2 = {a: {b: {c: 1}}};
console.log('\n两个内容相同但引用不同的嵌套对象:');
console.log('视为相同对象?', JSON.stringify(nestedObj1) === JSON.stringify(nestedObj2)); // true，这在某些情况下是优点

// 更好的数组去重替代方案

/**
 * 方案1: 自定义哈希函数
 * 根据对象的具体结构和需求设计哈希函数
 */
function getObjectHash(obj) {
  if (obj === null || typeof obj !== 'object') {
    return String(obj);
  }
  
  if (Array.isArray(obj)) {
    return '[' + obj.map(getObjectHash).join(',') + ']';
  }
  
  // 按属性名排序以解决属性顺序问题
  const keys = Object.keys(obj).sort();
  return '{' + keys.map(key => key + ':' + getObjectHash(obj[key])).join(',') + '}';
}

function uniqueWithCustomHash(arr) {
  const seen = new Set();
  return arr.filter(item => {
    const key = getObjectHash(item);
    if (!seen.has(key)) {
      seen.add(key);
      return true;
    }
    return false;
  });
}

/**
 * 方案2: 使用 Map 和自定义相等性判断
 */
function uniqueWithMap(arr, isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)) {
  const result = [];
  const seen = [];
  
  for (const item of arr) {
    let isDuplicate = false;
    for (const seenItem of seen) {
      if (isEqual(item, seenItem)) {
        isDuplicate = true;
        break;
      }
    }
    
    if (!isDuplicate) {
      result.push(item);
      seen.push(item);
    }
  }
  
  return result;
}

// 针对当前 index2.js 中的对象数组的优化去重方案
function unique(arr) {
  // 针对示例中的特定对象结构，使用更高效的去重方式
  const seen = new Map();
  
  return arr.filter(item => {
    // 创建一个基于对象关键属性的唯一键
    // 对于嵌套对象 like，也需要考虑其内容
    const likeKey = item.like ? JSON.stringify(item.like) : 'null';
    const key = `${item.name}_${item.age}_${likeKey}`;
    
    if (!seen.has(key)) {
      seen.set(key, true);
      return true;
    }
    return false;
  });
}

// 测试优化后的去重函数
console.log('\n使用优化后的 unique 函数结果:', unique(testArray));

// 结论：
// 1. JSON.stringify 去重虽然简单，但有诸多局限性
// 2. 对于简单对象数组可以使用，但对于包含特殊值、循环引用或对属性顺序敏感的场景不适用
// 3. 针对具体场景设计专用的去重函数能获得更好的性能和准确性