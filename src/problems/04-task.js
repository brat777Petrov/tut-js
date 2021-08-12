const task4 = {
    httpGetRequest(url, params, callback) {
        /**
         * аргументы:
         * url - адрес сервера
         * params - объект, в котором хранятся параметры для запроса
         * этот объект должен быть преобразован в строку и добавлен к url после символа '?'
         * callback - ф-ция которая будет вызвана после того как запрос выполнен и данные удачно распарсились
         * callback должен вызываться так:
         * если случилась какая-то ошибка то callback(error), если ошибки не было то callback(null, data);
         * использовать XmlHttpRequest 
         * https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
         *  
         */
          const fullUrl = url + encodeURIComponent('?')
           + objectToQuery(params);
          
           let x = new XMLHttpRequest();
          x.open("GET", fullUrl);
          x.send();
          x.onload = () => {
            let data = x.response;
            callback(null, data);
           };
          x.onerror = () => {
            callback(error);
          };                  
        },

    objectToQuery(obj) {
        //ф-ция на вход получает объект {key1: value1, key2: value2,.... } и возваращет строку в виде key1=value1&key2=value2....
        let param = '';
        for ( let key in obj ) {
          param += encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
           + '&';

        }
        return param.substring(0, param.length-1) ;
    },

    queryToObject(query) {
        //ф-ция на вход получает строку в виде key1=value1&key2=value2....
        // и возваращет объект {key1: value1, key2: value2,.... }
        const arrParam = query.split('&');
        let arrEl = [];
        let res = {};
        for ( let i = 0; i < arrParam.length; i++ ) {
          arrEl = arrParam[i].split('=');
          res[arrEl[0]] = decodeURIComponent(arrEl[1]);
        }
    
        return res;
    }

};