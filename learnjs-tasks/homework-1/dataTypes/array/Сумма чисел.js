function sumInput() {
    let arr = [];
    while (true) {
        let newValue = prompt("Введите число", 0);
        if (newValue === "" || newValue === null || !isFinite(newValue)) break;
        arr.push(+newValue);
    }

    let sum = 0;
    for (let number of arr) {
        sum += number;
    }
    return sum;
}
