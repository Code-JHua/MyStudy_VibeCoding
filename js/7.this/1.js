// // 需要给 speak 和 identify 显示传入一个上下文对象
// function identify(context) {
//     return context.name.toUpperCase();
// }

// function speak(context) {
//     var greeting = 'hello, i am' + identify(context)
//     console.log(greeting)
// }

// var me = {
//     name: 'Tom'
// }
// speak(me)

// 需要给 speak 和 identify 显示传入一个上下文对象

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = 'hello, i am' + identify(this)
    console.log(greeting)
}

var me = {
    name: 'Tom'
}
speak.call(me)