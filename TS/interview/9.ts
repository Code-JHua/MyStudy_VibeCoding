type Lengthwise = string | number
interface Person {
  age: number;
}

function loggingIdentity<T extends Lengthwise | Person>(arg: T): T {
  if (typeof arg === 'string') {
    console.log(arg.length);
  } else {
    console.log(arg.toString().length);
  }
  return arg;
}

loggingIdentity("hello");
// loggingIdentity(12345);


function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
