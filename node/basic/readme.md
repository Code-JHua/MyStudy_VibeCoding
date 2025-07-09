# npm (node package manager)
## 常用命令
- `npm init`: 初始化项目
- `npm install <package>`: 安装依赖
- `npm uninstall <package>`: 卸载依赖
- `npm run <script>`: 运行 package.json 中定义的脚本

# Window 和 Node 环境的区别
| 特性 | 浏览器环境 | Node.js 环境 |
|------|------------|--------------|
| 全局对象 | `window` | `global` |
| API | DOM, BOM | 文件系统, 进程管理等 |
| 模块系统 | ES6 Modules (需配置) | CommonJS |
| 入口点 | HTML 文件 | JS 文件 |

- 模块化
    1. commonJS 
        - 每个文件都是一个模块
        - 每个模块都有自己的作用域
        - 模块可以通过 `require` 函数引入其他模块
        - 模块可以通过 `module.exports` 或 `exports` 导出自己的内容
    2. ES Module( ES6（2015）引入的官方模块化标准，适用于浏览器和现代Node.js )
        - 每个文件都是一个模块
        - 每个模块都有自己的作用域
        - 模块可以通过 `import` 语句引入其他模块
        - 模块可以通过 `export` 语句导出自己的内容
    
    3. 关键区别对比
        | **特性**         | **CommonJS**                | **ES Module**                |
        |------------------|-----------------------------|------------------------------|
        | **加载方式**     | 运行时同步加载              | 编译时异步/静态加载          |
        | **输出类型**     | 值的拷贝                    | 值的引用                     |
        | **顶层this**     | 指向模块本身                | 指向`undefined`              |
        | **循环依赖**     | 可能导致部分加载失败        | 支持部分加载，更鲁棒         |
        | **文件扩展名**   | 通常省略（Node.js自动推断） | 必须显式指定`.js`            |


# 内置模块 
1. global
2. path 处理路径
3. fs 文件系统
4. http 服务器
