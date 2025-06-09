var num = 123 // new Number(123)
num.a = 'aaa'
// delete num.a

var S = 'hello'
var n = 123
var f = true
var u = undefined
var o = null
var b = 123123123n
var s = Symbol()

console.log(typeof S);
console.log(typeof(n));
console.log(typeof (f));
console.log(typeof (u));
console.log(typeof (b));
console.log(typeof (s));
console.log(typeof (o)); // object

var obj = {}
console.log(typeof obj);
