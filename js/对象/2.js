// function add(a, b) {
//     return a + b;
// }
// add(1, 2) // 3



// function Car(color) {
//     this.name = 'su7Ultra'
//     this.height = '1400'
//     this.lang = '4800'
//     this.weight = 1500
//     this.color = color
// }

// var car1 = new Car('orange') // 实例化对象
// var car2 = new Car('pink')

// car1.name = '劳斯莱斯'

// console.log(car1);
// console.log(car2);


function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}

var person1 =  Person('张三', 18, '男'); // 没有return 返回undefined

var person1 = new Person('张三', 18, '男');
console.log(person1);
