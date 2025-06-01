// var a = 1;

// function add(x, y){
//    return x + y;
// }
// console.log(add(1, 2));

// var a = 10;
// if (a > 5) {
//     console.log('hello');
// }

// var str = 'hello'; // string 字符串
// for (var i = 0; i < str.length; i++) {   //i++  === i = i + 1
//     console.log(str[i]);
// }
// console.log(i);



// 数据结构：按照某一个固定的规则类存储数据
var arr = [1, 2, 3, 4, 5, 'hello'];

// console.log(arr[2]); // 索引 || 下标

// arr.unshift('world');      // 头部添加
// arr.shift();               // 头部删除
// arr.push('Tom');           // 尾部添加
// arr.pop();                 // 尾部删除
// arr.splice(2, 0, 'Jerry');    // 任意位置添加
// arr.splice(2,1);              // 任意位置删除

// console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 1;
// }
// console.log(arr);

// function add(x, y) {
//     for (var i = 0; i < 10000; i++) {
//         let arr = [1, 2, 3, 4, 5]
//     }

//     return x + y;
// }

// add(1, 2)

var arr = ['a', 'b', 'c']
console.log(arr.indexOf('d'))

var obj = {      // key: value
    name: 'Tom',
    age: 18,
    sex: 'male'
}
console.log(obj.name);