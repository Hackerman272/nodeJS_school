function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculation = function(userString) {
        let strArr = userString.split(' ')
        let a = +strArr[0]
        let op = strArr[1]
        let b = +strArr[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}
