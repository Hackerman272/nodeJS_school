function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true    ---- для этого достаточно, чтобы оба конструктора возвращали ссылку на один и тот же заданный ранее объект


