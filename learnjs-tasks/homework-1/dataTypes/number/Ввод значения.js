function readNumber() {
    let userInput;
    do {
        userInput = prompt("Введите число", "")
    } while (isFinite(userInput) === false)
    if (userInput === "" || userInput === null) {
        return null
    }
    return +userInput
}
