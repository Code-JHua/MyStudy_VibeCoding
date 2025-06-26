# typeof
1. typeof 可以准确的判断除了 null 以外的基本类型
2. typeof 判断引用类型，除了 function 以外，其他的都返回 object

- typeof 是通过将值转换成二进制来判断类型的，对于二进制前三位是 0 的统一识别为对象，而所有的引用
类型转换成二进制前三位都是 0 ，null 的二进制全是 0

# instanceof
- 能准确判断引用类型，判断机制是: 通过对象的隐式原型链来查找是否存在莫一项等于右边的 prototype
- 不能判断基本类型

# Object.prototype.toString.call()
1. 如果 this value 未定义，则返回“[object Undefined]”。
2. 如果 this value 为 null，则返回“[object Null]”。
3. 设 O 为调用 ToObject(this) 的结果。
4. 设 class 为 O 的内部属性 [[Class]] 的值。
5. 返回字符串“[object” + class + “]”。

# Array.isArray()
