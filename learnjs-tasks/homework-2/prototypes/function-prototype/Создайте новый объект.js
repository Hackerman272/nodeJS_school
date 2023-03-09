function Object(value) {
    this.value = value
} // не ломает

function Object2(value) {
    this.value = value
}
Object2.prototype = {key: null} // ломает

let obj2 = new obj.constructor(); // сработает, если constructor исходного объекта не был переписан

