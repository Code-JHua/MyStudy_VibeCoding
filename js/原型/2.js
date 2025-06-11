Person.prototype.say = function () {
    console.log('我太帅了')
}

function Person() {
    this.name = '曹操'
}

const p1 = new Person()
// console.log(p1)   //显式拥有 name 属性，隐式拥有 say 属性
// p1.say()

// p1.name = '赖总'
// p1.say = 'hello'
// delete (Person.prototype).say

function Bus() {

}
Car.prototype = {
    constructor: Bus
}
function Car() {
    this.name = 'su7'
}
const car = new Car()

console.log(car.constructor); // 继承来的，从构造函数的原型上
// constructor 的存在是为了让所有的实例对象都知道自己是从哪个构造函数创建的
