function fib(n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n-1) + fib(n - 2);
    }
}

function fibFaster(n) {
    let Nminus2 = 1;
    let Nminus1 = 1;
    for (let i = 3; i <= n; i++){
        let Nnum = Nminus1 + Nminus2;
        Nminus2 = Nminus1;
        Nminus1 = Nnum;
    }
    return Nminus1;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fibFaster(77)); // 5527939700884757
