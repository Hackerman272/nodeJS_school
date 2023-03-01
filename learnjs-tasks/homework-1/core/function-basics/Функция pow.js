function pow(a, b) {
    return a**b
}

let x = +prompt("Введите число", "");
let n = +prompt("Введите степень", "");

(n < 1) ? alert("Данная степень не поддерживается функцией"): alert(pow(x, n));
