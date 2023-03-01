let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function getSalariesSum(object){
    let salary = 0;
    for (let employee in object) {
        salary += object[employee];
    }
    return salary;
}

sum = getSalariesSum(salaries)
