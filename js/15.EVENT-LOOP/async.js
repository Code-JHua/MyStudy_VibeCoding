const { useLayoutEffect } = require("react");

function a() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('a');
            resolve()
        }, 1000)
    })
}

function b() {
    console.log('b');
}

// a().then(() => {
//     b()
// })
async function foo() {
    await a()
    b()
}
foo()
