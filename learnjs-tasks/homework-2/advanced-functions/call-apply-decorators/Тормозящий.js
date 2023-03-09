function alert(x) {
    console.log(x);
}


let f = throttle(alert, 1000);

function throttle(func, debounceTime) {
    let lastCallTime = 0
    let lastFuncCall = null
    let needSlowedCall = false;
    return function decorator() {
        let thisOuter = this
        let thisArguments = arguments
        let delta = Date.now() - lastCallTime
        if (delta > debounceTime || needSlowedCall === true){
            func.apply(this, arguments)
            lastCallTime = Date.now()
        } else {
            // console.log(delta)
            clearTimeout(lastFuncCall)
            needSlowedCall = true
            lastFuncCall = setTimeout(function() {
                decorator.apply(thisOuter, thisArguments)
            }, delta)
            needSlowedCall = false
        }
    }
}

f(1); // показывает 1
f(2); // (ограничение, 1000 мс ещё нет)
f(3); // (ограничение, 1000 мс ещё нет)
