let user = {
    name: "Василий Иванович",
    age: 35
};

let JSONstring = JSON.stringify(user)

let newUser = JSON.parse(JSONstring)
