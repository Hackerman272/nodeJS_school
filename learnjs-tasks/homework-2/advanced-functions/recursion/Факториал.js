function factorial(limit) {
    if (limit > 1){
        return limit * factorial(limit - 1);
    } else {
        return 1;
    }
}

console.log(factorial(4));
