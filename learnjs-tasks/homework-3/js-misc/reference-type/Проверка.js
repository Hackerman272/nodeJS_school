let user = {
    name: "John",
    go: function() { console.log(this.name) }
} // нужно или убрать скобки вокруг user.go, или поставить тут точку с запятой. Иначе движок JS не может сам автоматически при выполнении кода поставить между } и ( точку с запятой

user.go()
