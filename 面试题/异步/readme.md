# 回调
- 回调地狱:
1. 不利于阅读和维护
2. 回调函数嵌套过深, 很难处理错误
3. 无法通过 try catch 捕获错误

# Promise
- promise 原理:


- .then():
1. 默认返回一个新的 promise 对象, 状态同 then 前面的 promise 对象
2. then 中的回调如果存在 return promise, 那么 then 用自己返回的 promise 对象

- .race():
1. 接收一个 promise 数组, 第一个改变状态的 promise 决定了最终的状态和值
2. 成功的结果是第一个成功的 promise 的结果, 失败的结果是第一个失败的 promise 的结果

- .all():
1. 接收一个 promise 数组, 所有 promise 都成功才成功, 有一个失败就失败
2. 成功的结果是一个数组, 失败的结果是第一个失败的 promise 的结果
3. 成功的结果数组的顺序和 promise 数组的顺序一致

- .any():
1. 接收一个 promise 数组, 有一个成功就成功, 所有失败才失败
2. 成功的结果是第一个成功的 promise 的结果, 失败的结果是一个数组, 包含所有失败的 promise 的结果
3. 失败的结果数组的顺序和 promise 数组的顺序一致

- .finally():
1. 无论 promise 最终状态是成功还是失败, 都会执行 finally 中的回调
2. finally 中的回调不接收参数
3. finally 中的回调返回值会被忽略

- .allSettled():
1. 接收一个 promise 数组, 所有 promise 都执行完, 无论成功还是失败
2. 成功或失败的结果是一个数组, 每个元素是一个对象, 包含状态和值

# Generator 函数
- 原理:
1. 生成器函数返回的是一个迭代器对象
2. 迭代器对象有 next 方法, 调用 next 方法会返回一个对象, 包含 value 和 done 两个属性
3. value 是 yield 后面的表达式的值, done 是一个布尔值, 表示是否迭代完成
4. 调用 next 方法可以传递参数, 这个参数会作为上一个 yield 表达式的返回值

# async await
1. async 函数返回的是一个 promise 对象
2. await 后面可以是一个 promise 对象, 也可以是一个普通的值, 普通的值没有任何作用
3. await 必须在 async 函数中使用
4. await 后面的 promise 对象如果成功, 那么 await 表达式的返回值就是成功的值
5. await 后面的 promise 对象如果失败, 那么 await 表达式会抛出错误, 可以使用 try catch 捕获错误

async await == generator + co + promise