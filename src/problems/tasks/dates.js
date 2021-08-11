const datesTask = {
    //вывести на консоль текущую дату в формате DD.MM.YYYY hh:mm:ss
    printCurrentDateAndTime() {
      const now = new Date();
      const date = now.getHours();
      const month = now.getMonth();
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now. getSeconds()
    
      return date + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    },

    //на вход ф-ция получается объект Date. Вывести на консоль сколько времени прошло от даты в прошлом до сейчас
    //длительность надо вывести в формате '1 years 2 months 3 days 4 hours 5 minutes 6 seconds ago'.
    //если какая=то часть равна 0 то её не нужно выводить
    fromNow(d) {
      const now = new Date();
      const diff = +now - (+d);
      let result = {};
      
      result.years = parseInt(diff / 12614400);
      result.month = parseInt((diff - (+result.years * 12614400)) / 1036800);
      result.days = parseInt((diff - result.years * 12614400 - result.month * 1036800) / 34560);
      result.hours = parseInt((diff - result.years * 12614400 - result.month * 1036800 - result.days * 34560) / 1440);
      result.minutes = parseInt((diff  - result.years * 12614400 - result.month * 1036800 - result.days * 34560 - result.hours * 1440 )/ 60);
      result.seconds = diff  - result.years * 12614400 - result.month * 1036800 - result.days * 34560 - result.hours * 1440 - result.minutes * 60;
    
      let str = '';
      for(let key in result) {
        if (result[key]) 
        str +=result[key] + ' ' + key + ' ';
      }
    
      return str;
    }
};
