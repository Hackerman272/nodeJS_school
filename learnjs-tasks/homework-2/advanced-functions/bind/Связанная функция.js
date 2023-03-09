function f() {
    alert( this ); // ?
}

let user = {
    g: f.bind(null)
};

user.g(); // null, т.к. присвоили null в качестве контекста, вместо this функции f
