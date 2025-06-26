let str = '123'  // string
let num = 123   // number
let bool = true  // boolean
let und = undefined  // undefined
let nul = null  // object
let sy = Symbol()  // symbol
let big = 123n  // bigint


let arr = []  // object
let obj = {}  // object
let date = new Date()  // object
let set = new Set()  // object
let map = new Map()  // object
let fun = function () { }  // function


// console.log(arr instanceof Array); 
// console.log(obj instanceof Object);
// console.log(date instanceof Date);
// console.log(set instanceof Set);
// console.log(map instanceof Map);
// console.log(fun instanceof Function);
console.log(str instanceof String); // false
console.log(num instanceof Number); // false
console.log(bool instanceof Boolean); // false
// console.log(und instanceof Undefined); // false
console.log(nul instanceof Null); // true
console.log(sy instanceof Symbol); // true
console.log(big instanceof BigInt); // true


