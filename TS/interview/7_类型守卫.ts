function isNumber(x: any): x is number {
  return typeof x === "number";
}

let input 
// 想要在这个分支中, 类型守卫已经将 input  narrow 为 number 类型
if(isNumber(input)) {
  
}