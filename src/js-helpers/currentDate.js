function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function currentDate(timeFirst) {
    const today = new Date();
    const monthsList = [
       'января',
       'февраля',
       'марта',
       'апреля',
       'мая',
       'июня',
       'июля',
       'августа',
       'сентября',
       'ноября',
       'декабря',
    ];

    if (timeFirst) return `${addZero(today.getHours())}:${addZero(today.getMinutes())}, ${today.getDate()} ${monthsList[today.getMonth()]} ${today.getFullYear()}`;
    else return `${today.getDate()} ${monthsList[today.getMonth()]} ${today.getFullYear()} в ${today.getHours()}:${today.getMinutes()}`;
}

module.exports = currentDate;
