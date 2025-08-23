(function (graph) {
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
              require('./src/index.js')
            })({"./src/index.js":{"deps":{"./add.js":"./src\\add.js","./minus.js":"./src\\minus.js"},"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\nvar _minus = require(\"./minus.js\");\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nvar sum = (0, _add[\"default\"])(1, 2);\nvar diff = (0, _minus.minus)(1, 2);\nconsole.log(sum, diff);"},"./src\\add.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = exports[\"default\"] = function _default(a, b) {\n  return a + b;\n};"},"./src\\minus.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = void 0;\nvar minus = exports.minus = function minus(a, b) {\n  return a - b;\n};"}})