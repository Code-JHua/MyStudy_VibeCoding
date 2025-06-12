function foo(x, y) {
    console.log(this.a, x + y);   
}
var obj = {
    a: 1
}
//call
foo.call(obj, 1, 2)
// apply
foo.apply(obj, [1, 2])
// bind
const bar = foo.bind(obj)
bar(1, 2)