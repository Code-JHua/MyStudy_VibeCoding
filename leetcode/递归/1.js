// 5！
// mul(5) ==> 5 * mul(4)
// mul(4) ==> 4 * mul(3)
// mul(3) ==> 3 * mul(2)
// mul(2) ==> 2 * mul(1)
// mul(1) ==> 1

// mul(n) ===> n * mul(n-1)...
function mul(n) {
    if (n === 1) {
        return 1
    }

     return res =  n * mul(n - 1)
}
console.log(mul(5));
