function alert(x) {
    console.log(x);
}


let f = debounce(alert, 1000);

function debounce(func, debounceTime) {
    let lastCallTime = 0
    return function() {
        if (Date.now() - lastCallTime > debounceTime){
            func.apply(this, arguments)
            lastCallTime = Date.now()
        }
    }
}

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
