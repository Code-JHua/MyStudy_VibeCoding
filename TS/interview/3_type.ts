interface Person {
  name: string;
  age: number;
}

type abc = string | number | boolean; // 联合类型

type def = Person & { id: number }; // 交叉类型

type ghi = [string, number, boolean]; // 元组类型

