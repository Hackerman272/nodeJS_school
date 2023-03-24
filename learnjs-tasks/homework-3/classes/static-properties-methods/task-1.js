// отличие будет
class Rabbit extends Object { // extends устанавливает дополнительно для Rabbit.__proto__ значение Object,
    // чего не происходит без extends
    constructor(name) {
        super(); // необходимо добавить super, чтобы наследовать конструктор
        this.name = name;
    }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // Ошибка
