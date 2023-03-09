let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();  // свойство full получит rabbit, т.к. унаследованный метод относится к контексту rabbit
