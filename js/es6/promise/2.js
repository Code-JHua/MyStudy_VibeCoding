function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('小胡相亲成功');
            resolve() // 成功状态
        }, 1000)
    })
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('小胡结婚了');
            resolve()
        }, 2000)
    })
}

function baby() {
    setTimeout(() => {
        console.log('小胡有了一个 baby');
    }, 500)
}

// xq().then(() => {
//     marry().then(() => {
//         baby()
//     })
// })
// 1. 执行 xq 函数，立即返回个 promise 实例对象，但是此时该对象的状态是 pending (等待状态)
// 2. .then 立即触发，但是 then 里面的回调函数没有触发
// 3. 等待 xq 函数里面的 resolve() 执行完毕，此时实例对象的状态会变更为 fulfilled (成功状态)

xq()  // 里面执行到了 resolve()
.then(() => {  // then 的源码里面也返回了一个 promise 实例对象 ，状态默认继承自 xq 函数返回的对象的状态
    return marry()
})
.then(() => {  // 保证第一个 then 返回的状态继承于 marry 函数返回的对象状态 --> 第二个 then 返回 marry
    baby()
})