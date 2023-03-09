function sum(value) {
    let summary = value;
    function insideFunction(value2) {
        summary += value2
        return insideFunction
    }

    insideFunction.toString = function() { return summary };

    return insideFunction;
}

console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)))
