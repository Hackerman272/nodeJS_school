let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, property) {
            if (property in target) {
                return target[property]
            } else {
                throw new ReferenceError("Свойство не найдено")
            }
        }
    });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
