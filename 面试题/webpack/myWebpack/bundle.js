const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const path = require('path')
const babel = require('@babel/core')

const getModuleInfo = (file) => {
  const body = fs.readFileSync(file, 'utf-8') // 1. 获取主模块内容
  const ast = parser.parse(body, {  // 2. 分析主模块代码, 生成 AST 语法树
    sourceType:'module', // 告诉 babel 我们的代码是 es6 模块
  })

  // 3. 遍历 AST 语法树, 递归的收集依赖
  const deps = {}
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      // console.log(node.source.value);
      const dirname = path.dirname(file) 
      const absPath = './' + path.join(dirname, node.source.value)
      deps[node.source.value] = absPath
    }
  })
  // 根据 ast 语法树, 生成低版本的 js 代码
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  })
  return {
    file,
    deps,
    code
  }
}

const parseModule = (file) => {
  const moduleInfo = getModuleInfo(file)
  // 递归读取依赖
  const temp = [moduleInfo]
  for (let i = 0; i < temp.length; i++) {
    const deps = temp[i].deps
    if (deps) {
      for (const key in deps) {
        if (deps.hasOwnProperty(key)) {
          const child = getModuleInfo(deps[key])
          temp.push(child)
        }
      }
    }
  }
  const depsGraph = {}
  temp.forEach(item => {
    depsGraph[item.file] = {
      deps: item.deps,
      code: item.code
    }
  })
  // console.log(depsGraph);
  return depsGraph

}

// 处理 require 函数和 exports 对象
const bundle = (file) => {
  const depsGraph = JSON.stringify(parseModule(file))
    return `(function (graph) {
              function require(file) {
                function localRequire(relativePath) {
                  return require(graph[file].deps[relativePath])
                }
                var exports = {};
                (function (require, exports, code) {
                  eval(code)
                })(localRequire, exports, graph[file].code)
                return exports
              }
              require('${file}')
            })(${depsGraph})`
}

const code = bundle('./src/index.js')
console.log(code);
fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js', code)

// 执行结果
// (function (graph) {
//   function require(file) {
//     function localRequire(relativePath) {
//       return require(graph[file].deps[relativePath])
//     }
//     (function (require, exports, code) {
//       eval(code)
//     })(localRequire, exports, graph[file].code)
//     var exports = {}
//     return exports
//   }
//   require('./src/index.js')
// })({ "./src/index.js": { "deps": { "./add.js": "./src\\add.js", "./minus.js": "./src\\minus.js" }, "code": "\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\nvar _minus = require(\"./minus.js\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nvar sum = (0, _add[\"default\"])(1, 2);\nvar diff = (0, _minus.minus)(1, 2);\nconsole.log(sum, diff);" }, "./src\\add.js": { "deps": {}, "code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = exports[\"default\"] = function _default(a, b) {\n  return a + b;\n};" }, "./src\\minus.js": { "deps": {}, "code": "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = void 0;\nvar minus = exports.minus = function minus(a, b) {\n  return a - b;\n};" } })