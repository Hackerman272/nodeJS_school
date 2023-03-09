function inBetween(a, b) {
    return function (c) {
        return c >= a && c <= b
    }
}


function inArray(arr){
    return function (item) {
        return arr.includes(item)
    }
}
