function count(object) {
    let count = 0;
    for (let key of Object.keys(object)){
        count += 1;
    }
    return count;
}
