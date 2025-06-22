// function foo() {
//     var a = 1;
//     var b = a;
//     a = 2;
//     console.log(a);
//     console.log(b);
    
// }

function foo() {
    var a = { name: '成哥' }
    var b = a
    a.name = '周圣'
    console.log(a);
    console.log(b);
}