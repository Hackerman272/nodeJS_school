function unique(arrUnunique) {
    let result = [];
    for (let string of arrUnunique) {
        if (!result.includes(string)) {
            result.push(string);
        }
    }
    return result;
}
