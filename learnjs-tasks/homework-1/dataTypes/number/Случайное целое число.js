function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min + 1) + 0.5;
    return Math.round(rand);
}

alert(randomInteger(1, 3));
