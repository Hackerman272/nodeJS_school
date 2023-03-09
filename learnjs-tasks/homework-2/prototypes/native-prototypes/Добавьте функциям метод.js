function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = function (delay) {
    let currentFunction = this;
    return function wrapper(...args) {
        setTimeout(function () {
            currentFunction.apply(this, args)
        }, delay)
    }
}


f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
