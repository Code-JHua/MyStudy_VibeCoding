const obj = { // 创建了一个对象字面量
    name: '赖总',
    age: 20
}

//查
console.log(obj.age);
console.log(obj['age']);

//增
obj.sex = '男';
obj['height'] = 180;

//改
obj.age = 21;
obj['age'] = 22;

//删
delete obj.age;
delete obj['age'];

console.log(obj)

var obj = {}  // 字面量| 直接量
// 构造函数  Object
var obj2 = new Object();
// 之定义构造函数
var obj3 = new Person()
function Person() {
    
}
