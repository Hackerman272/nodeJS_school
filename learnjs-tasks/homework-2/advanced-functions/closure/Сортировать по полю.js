let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];


function byField(fieldName){
    return function (item, item2) {
        if (item[fieldName] < item2[fieldName]){
            return -1
        } else {
            return 1
        }
    }
}


// users.sort(byField('name'));
// console.log(users)
users.sort(byField('age'));
console.log(users)
