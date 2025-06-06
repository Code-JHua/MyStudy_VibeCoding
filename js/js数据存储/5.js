function foo(person) {
    person.age = 20
    person = {
        name: '小钟'
    }
    return person
}
let p1 = {
    name: '小华',
    age: 18
}
let p2 = foo(p1)

console.log(p1);
console.log(p2);