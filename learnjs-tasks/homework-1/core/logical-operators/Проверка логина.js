let userLogin = prompt("Кто там?", "")

if (userLogin === "Админ"){
    let password = prompt("Пароль?", "")
    if (password === "Я Главный") {
        alert("Здравствуйте")
    } else if (password === null || password === "") {
        alert("Отменено")
    } else {
        alert("Неверный пароль")
    }
} else if (userLogin === null || userLogin === "") {
    alert("Отменено")
} else {
    alert("Я вас не знаю")
}
