function person(person: Person): Person {
  return {
    name: person.name,
    age: person.age,
  }
}

interface Person {
  name: string;
  age: number;
}

// 接口可以继承
interface Student extends Person {
  id: number;
}