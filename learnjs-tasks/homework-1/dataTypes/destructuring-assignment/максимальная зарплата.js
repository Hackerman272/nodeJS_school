function topSalary(salaries){
    let maxSalary = 0;
    let maxName = null;

    for (let [Name, Salary] of Object.entries(salaries)) {
        if (maxSalary < Salary) {
            maxName = Name
            maxSalary = Salary
        };
    }
    return maxName
}
