function getWeekDay(date) {
    let weekLetters = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ",]
    return weekLetters[date.getDay()];
}
