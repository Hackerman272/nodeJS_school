function formatDate(checkingDate) {
    let delta = new Date() - checkingDate; // разница в миллисекундах
    if (delta < 1000) { // меньше 1 секунды
        return 'прямо сейчас';
    }
    else if (Math.floor(delta / 1000) < 60) {
        return Math.floor(delta / 1000) + ' сек. назад';
    }
    if (Math.floor(delta / 60000) < 60) {
        return Math.floor(delta / 60000) + ' мин. назад';
    }

    let formattedDate = checkingDate;
    formattedDate = [
        '0' + formattedDate.getDate(),
        '0' + (formattedDate.getMonth() + 1),
        '' + formattedDate.getFullYear(),
        '0' + formattedDate.getHours(),
        '0' + formattedDate.getMinutes()
    ]
    formattedDate = formattedDate.map(part => part.slice(-2));
    return formattedDate.slice(0, 3).join('.') + ', ' + formattedDate.slice(3).join(':');
}
