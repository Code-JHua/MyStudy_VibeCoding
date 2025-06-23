// function foo(x, y) {
//     return x + y
// }

// console.log(foo(1, 2));

function foo(...arg) {
    //console.log(arguments);// 代码函数接收到的所有参数  类数组
    console.log(arg);
    
}
foo(1, 2, 3, 4)


const foo = () => {// 

} 