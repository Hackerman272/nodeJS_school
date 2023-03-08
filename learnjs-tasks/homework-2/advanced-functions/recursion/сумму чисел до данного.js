// loop
function sumTo(limit){
    let result = 0;
    for (let i = limit; i > 0; i--) {
        result += i
    }
    return result;
}

// recursion
function sumTo2(limit){
    if (limit > 1) {
        return limit + sumTo(limit - 1);
    }
}

// формула. Быстрее всех т.к. нет никаких циклов.
function sumTo3(limit){
    return ((limit + 1) * limit) / 2;
}


console.log(sumTo(100000))
console.log(sumTo2(100000))
console.log(sumTo3(100000))
