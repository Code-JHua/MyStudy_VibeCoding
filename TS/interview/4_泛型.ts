// 泛型函数
function identity<T>(arg: T): T { 
  return arg;
}
let output = identity({ name: "张三", age: 18 });


// 泛型接口
interface IIdentity<T> { 
  name: string;
  age: number;
  data: T;
}

function identity3<T>(arg: IIdentity<T>): IIdentity<T> {
  return arg;
}
let obj: IIdentity<{ id: number }> = {
  name: "张三",
  age: 18,
  data: { id: 1001 },
};


// class 既是类, 也是类型
class MyClass<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}
let myClass = new MyClass({ id: 1001 });
