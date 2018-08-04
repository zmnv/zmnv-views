function currentDate() {
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
    return `${today.getDate()} ${monthsList[today.getMonth()-1]} ${today.getFullYear()} в ${today.getHours()}:${today.getMinutes()}`;
}

module.exports = currentDate;
