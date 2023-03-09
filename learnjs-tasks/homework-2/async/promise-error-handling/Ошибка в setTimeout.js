new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert); // catch пока что не видит ошибки, которая будет примерно через 1000 мс
