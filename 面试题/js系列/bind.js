Function.prototype.myBind = function (context, ...args) {
  let _this = this
  return function F(...args2) {
    if(this instanceof F) {  //有没有被 new
      return new _this(...args, ...args2)
    }
    return _this.apply(context, [...args, ...args2])
  }
}



function foo(x, y, z) {
  this.m = 'dsdsad'
  console.log(this.a, x + y + z);
}

let obj = {
  a: 1
}
const F = foo.myBind(obj, 1, 2, 3)
// F()
foo.call(obj, 1, 3, 3)
const res = new F()
console.log(res);
console.log(res instanceof foo); // bind 返回的函数体如果被 new 调用的话，得到的是原函数



