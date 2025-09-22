# TS
1. 静态类型
2. 类
3. 接口
4. 模块

# 类型声明 & 类型推断

# 接口的作用, 使用场景
接口的作用是定义对象的形状, 可以用来约束函数的参数和返回值, 也可以用来约束类的属性和方法.
interface Person {
  name: string;
  age: number;
}

- 接口和类型别名的区别
  - 类型别名可以用于定义原始类型, 联合类型, 交叉类型, 元组类型, 也可以用于任意类型, 接口只能用于定义对象类型
  - 都可以继承
  - 接口可以合并重复声明, 类型别名不能.

# 泛型
泛型是指在定义函数, 接口, 类时, 不预先指定具体的类型, 而在使用时再指定类型.
- 泛型函数
- 泛型接口
- 泛型类

# 枚举
枚举是指将一组相关的常量组织起来, 并为每个常量分配一个唯一的标识符.

# 可空类型如何处理
可空类型是指类型可以是 undefined 或 null. 可以使用联合类型来表示可空类型.
```ts
let a: number | undefined = 10;
let b: number | null = null;
```

# 类型断言
类型断言是指将一个变量的类型强制转换为另一个类型. 可以使用尖括号语法或 as 关键字来进行类型断言.
```ts
let a: number | undefined = 10;
let b: number = a as number;
```

# 类型守卫
类型守卫是指在运行时检查变量的类型, 并根据类型执行不同的操作. 可以使用 typeof, instanceof, 或自定义类型守卫来进行类型守卫.
```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}
```

# const readonly



# 如何约束泛型的参数类型


# 装饰器