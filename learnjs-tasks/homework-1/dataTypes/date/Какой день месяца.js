let date = new Date(2015, 0, 2);

function getDateAgo(currentDate, days) {
    let currentDateForOperating = new Date(currentDate);
    currentDateForOperating.setDate(currentDate.getDate() - days);
    return currentDateForOperating.getDate();
}
