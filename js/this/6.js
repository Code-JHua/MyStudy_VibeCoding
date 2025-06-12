function Person() {
    // var obj = {}
    // Person.call(obj)
    this.name = 'Tom'
    this.age = 18
    // obj.__proto__ = Person.prototype
    // return obj
}
const p = new Person()
console.log(p)
