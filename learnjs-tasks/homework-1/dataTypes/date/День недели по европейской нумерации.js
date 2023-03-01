function getLocalDay(date) {
    let weekLetters = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ",]
    if (date.getDay() === 0){
        return weekLetters[7];
    }
    return weekLetters[date.getDay()];
}
