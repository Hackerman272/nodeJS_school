function filterRangeInPlace(oldArr, a, b) {
    for (let i = 0; i < oldArr.length; i++) {
        let val = oldArr[i];
        if (val < a || val > b) {
            oldArr.splice(i, 1);
            i -= 1;
        }
    }
}
