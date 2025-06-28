# ==  vs  ===
1. == 会发生隐式类型转换，所以值判断值是否相等
2. === 不会发生类型转换，所以会判断值和类型是否相等

# 类型转换
显示转换和隐式转换只看当前的代码场景，他们的转换原理是一样的

- 显式类型转换
    1. 转布尔 Boolean()
    2. 转数字 Number()   https://es5.github.io/#x15.7.1.1
    3. 转字符串 String()   https://es5.github.io/#x15.5.1.1
- 隐式类型转换
    1. 原始类型转原始类型
    2. 引用类型转原始类型
        1. 转布尔 --- 任何引用类型转布尔都是 ture
        2. 转字符串 --- String(obj) ==> ToString(obj) ==> ToPrimitive(obj,String) 
        3. 转数字 --- Number(obj) ==> ToNumber(obj) ==> ToPrimitive(obj,Number)


# ToPrimitive (https://es5.github.io/#x8.12.8)

- ToPrimitive(obj, String)
    1. 判断 obj 是否为原始类型，是则直接返回
    2. 否则，调用 toString(), 如果得到了原始类型，则放回
    3. 否则，调用 valueOf(), 如果得到了原始类型，则返回
    4. 否则，抛出 TypeError 异常

- ToPrimitive(obj, Number)
    1. 判断 obj 是否为原始类型，是则直接返回
    2. 否则，调用 valueOf(), 如果得到了原始类型，则返回
    3. 否则，调用 toString(), 如果得到了原始类型，则放回
    4. 否则，抛出 TypeError 异常

# valueOf()
- valueOf 在对象的原型上，他只能将包装类的对象转换为原始类型

# toString() 
- js 中大部分的构造函数原型上都重写了对象原型上的 toString 方法，将对象转换为字符串
    1. {}.toString 返回由 '[object' 和 [[class]] 和 ']' 组成的字符串
    2. [].toString 返回由数组每一项用逗号拼接的字符串
    3. xxx.toString 直接返回 xxx 的字符串字面量

# 发生隐式类型转换的场景
1. 四则运算 + - * / % 等
2. 条件判断 if while == >= <= > < != 等


# +
1. 作为一元运算符 -- 会发生隐式类型转换，转成 number
2. 作为二元运算符 -- 只要 + 左右两边有一个是字符串，那么另一个也会转字符串进行拼接
