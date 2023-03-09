class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)

    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
    }

    throw new HttpError(response);
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    let user;

    while(true) {
        let name = prompt("Введите логин?", "iliakan")
        try {
            user = await loadJson(`https://api.github.com/users/${userName}`)
            alert(`Полное имя: ${user.name}.`);
            return user;
        } catch (error) {
            if (error instanceof HttpError && error.response.status === 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                return demoGithubUser();
            } else {
                throw error;
            }
        }
    }
}

demoGithubUser();
