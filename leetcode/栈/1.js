let stack = [];  //主观上说它是一个栈，他就是一个栈。

stack.push('小布丁');
stack.push('老冰棍');
stack.push('北冰洋');
stack.push('可爱多');

// for(let i = stack.length - 1; i >= 0; i--) {  //就不是一个栈了
//     console.log(`我爱吃${stack[i]}`)
// }

while (stack.length > 0) {  //栈
    console.log(`我爱吃${stack.pop()}`)
}