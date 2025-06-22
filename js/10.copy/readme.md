# 面试题: 请你手写一个深浅拷贝函数

# v8 是如何存储数据的
1. 栈内存: 存储基本数据类型, 比如 number, string, boolean, null, undefined, symbol
2. 堆内存: 存储引用数据类型, 比如 object, array, function, date, regexp, 等

# js 中的数据类型
1. 基本类型
2. 引用类型

# 拷贝
- 复刻一个对象，和原对象长得一模一样

- 浅拷贝
    - 只复制对象的第一层属性
    - 如果属性是引用类型，复制的是引用地址
    - 修改嵌套对象会影响原对象

    - 实现浅拷贝的方法
        1. Object.create(obj)
        2. [].concat(arr)
        3. 数组解构  [...arr]
        4. arr.slice(0, arr.length)
        5. Object.assign({},obj)

- 深拷贝
    - 完全复制整个对象，包括所有嵌套对象
    - 新旧对象完全独立，互不影响

    - 实现深拷贝的方法
        1. JSON.parse(JSON.stringify(obj)) 
            - 简单, 但是不能识别 bigin，不能拷贝 function symbol undefined
            - 不能解决循环引用的问题
        2. structuredClone()

    - 手写深拷贝 (deep.js)