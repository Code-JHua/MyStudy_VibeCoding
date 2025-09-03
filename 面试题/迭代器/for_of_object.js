// 如何用 for of 遍历对象

// 默认情况下，普通对象不能直接使用 for of 遍历，因为它们不是可迭代对象
const obj = {
  name: '张三',
  age: 25,
  city: '北京'
};

console.log('方法1: 使用 Object.keys() 获取键数组并遍历:');
for (const key of Object.keys(obj)) {
  console.log(`${key}: ${obj[key]}`);
}

console.log('\n方法2: 使用 Object.values() 获取值数组并遍历:');
for (const value of Object.values(obj)) {
  console.log(value);
}

console.log('\n方法3: 使用 Object.entries() 获取键值对并遍历:');
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

console.log('\n方法4: 让对象本身成为可迭代对象(实现Symbol.iterator):');
const iterableObj = {
  name: '李四',
  age: 30,
  city: '上海',
  
  // 实现Symbol.iterator方法
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let index = 0;
    
    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index];
          index++;
          return {
            value: { key, value: this[key] },
            done: false
          };
        } else {
          return {
            done: true
          };
        }
      }
    };
  }
};

// 现在可以直接用for of遍历iterableObj
for (const item of iterableObj) {
  console.log(`${item.key}: ${item.value}`);
}

console.log('\n总结:');
console.log('1. 普通对象默认不能用for of遍历');
console.log('2. 可以通过Object.keys/values/entries方法转换后使用for of');
console.log('3. 也可以通过实现Symbol.iterator方法让对象本身成为可迭代对象');