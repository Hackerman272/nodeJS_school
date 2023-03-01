function getLastDayOfMonth(year, month) {
    // указывая 0 перескакиваем в конец предыдущего месяца
    let dateHint = new Date(year, month + 1, 0);
    return dateHint.getDate();
}
