let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, property) {
        if (property < 0) {
            let index = -1 * property
            return target[target.length - index]
        } else {
            return target[property]
        }
    }
});

console.log( array[-1] ); // 3
console.log( array[-2] ); // 2
console.log( array[2] ); // 3
console.log( array[-4] ); // undefined

// вся остальная функциональность массивов должна остаться без изменений
