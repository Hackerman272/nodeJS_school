function A() {}
function B() {}

A.prototype = B.prototype = {}; // prototype идентичный, вследствие чего instanceof возвращает true, т.к. сравнивает именно prototype

let a = new A();

alert( a instanceof B ); // true
