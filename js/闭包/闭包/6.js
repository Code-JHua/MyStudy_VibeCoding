function foo() {
    var myname = 'xiaohua'
    var age = 18

    return function bar() {
        console.log(myname);
    }

}
var baz=foo()
baz()