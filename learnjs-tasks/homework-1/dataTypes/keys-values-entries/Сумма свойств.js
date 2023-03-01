function sumSalaries(object) {
    let summary = 0;
    for (let value of Object.values(object)) {
        summary += value;
    }
    return summary;
}
