// 1 1  2 3 5 8 13 21

function fib(n) {
    if(n == 1 || n == 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
console.log(fib(10));
