function delay(delayTime) {
    return new Promise(
        resolve => setTimeout(resolve, delayTime)
    )
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));
