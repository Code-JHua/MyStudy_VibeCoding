let str = '[1,2,3]' //String  
// console.log(str.charAt(0));
// console.log(str.length);
// console.log(str[0]);

let num = 123; //Number
// console.log(num)
// console.log(num.toString());

let flag = true; //Boolean
// console.log(flag);
// console.log(flag.toString());

let un = undefined; 

let nul = null; 

// 以上都是字面量

//以下都是构造函数的创建方式
let str2 = new String('hello')
// console.log(str2);
let num2 = new Number(123)
let flag2 = new Boolean(true)

// let un2 = new Undefined() // x
// let nul2 = new Null()    // x

let s1 = 'hello'
let s2 = 'hello'
console.log(s1 === s2); //true

let sy1 = Symbol('hello')
let sy2 = Symbol('hello')
console.log(sy1 === sy2); //false
