var a = 10;
console.log(a);// 在全局查找 a

function foo(a, b) {
    console.log(a + b);
}

foo(1, 2);
