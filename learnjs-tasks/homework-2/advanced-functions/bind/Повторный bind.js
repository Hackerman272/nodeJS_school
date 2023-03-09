function f() {
    alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f(); // выведет "Вася", т.к. после первого bind для созданной функции повторный bind не применим.
