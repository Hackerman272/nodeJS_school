function printNumbers(from, to) {
    let now = from;
    let timer = setInterval(
        function () {
            console.log(now)
            if (now === to) {
                clearInterval(timer)
            }
            now += 1
        }, 1000)
}

// printNumbers(5, 10)


function printNumbers2(from, to) {
    let now = from;
    let timer = setTimeout(function print() {
        console.log(now)
        if (now < to){
            setTimeout(print, 1000)
        }
        now++
    }, 1000)
}

printNumbers(5, 10)
