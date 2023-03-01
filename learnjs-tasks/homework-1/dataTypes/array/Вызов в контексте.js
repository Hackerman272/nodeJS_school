let arr = ["a", "b"];

arr.push(function() {
    alert( this );
});

arr[2](); // this ведёт к тому же объекту arr, выведется a, b и функция
