let handlerFunctions = Symbol('handlerFunctions');
function makeObservable(target) {
    target[handlerFunctions] = [];
    target.observe = function (handler) {
        this[handlerFunctions].push(handler);
    }
    return new Proxy(target, {
        set(target, property, newValue, receiver) {
            let setFinish = Reflect.set(...arguments);
            if (setFinish) {
                target[property] = newValue;
                target[handlerFunctions].forEach(handlerFunction => handlerFunction(property, newValue));
            }
            return setFinish
        }
    })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
