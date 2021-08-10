const arraysTask = {
    //ф-ция должна сортировать массив любым способом(пузырьком, вставками, выбором)
    //использовать метод array.sort нельзя. Сортировка дложна использовать циклы, условные операторы и тп.
    sortArray(array) {
      let min = array[0];
      let el;
      let count = 1;
      while (count) {
        count = 0;
        for ( let i = 0; i < array.length-1; i++ ) {
          if (array[i] > array[i+1]) {
            el = array[i];
            array[i] = array[i+1];
            array[i+1] = el;
            count ++;
          }
        }
      }
      return array;
    },
    //вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
    //range(0, 3) => [0, 1, 2, 3]
    range(start, end) {
      let arr = [];
      for ( i = 0; i <= (end - start); i++ ) {
        arr[i] = start + i;
      }
      return arr;
    },
    //ф-ция должна вернуть последние n элементов массива
    //если n > array.length то вернуть копию массива
    lastN(array, n) {
      if ( n > array.length ) return array;

      let arr = [];
      for ( let i = n-1; i >= 0; i-- ) {
        arr[i] = array.pop();
      }
      return arr;
    },
    //ф-ция должна вернуть новый массив, в котором будут все элементы исоходного массива, но без дубликатов
    //unique([1, 2, 3, 3]) => [1, 2, 3]
    unique(array) {
      return Array.from(new Set(array));
    },
    //вернуть новый массив из элементов, для которых ф-ция cb вернёт true
    //аналог родного array.filter
    filter(array, cb) {
      let arr = [] ;
      let j = 0;
 
      for ( i = 0; i < array.length; i++ ) {
        if (cb(array[i])) {
          arr[j] = array[i];
          j++;
        }
      }
      return arr;
    },
    //эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
    breakableForEach(array, cb) {
      for (let i = 0; i < array.length; i++) {
        cb(array[i]);
        if (!cb(array[i])) {
           break;
        }
      }

    },
    //ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
    //areArraysEqual([1, 2, 3], [2, 3, 1]) => true
    //areArraysEqual([1, 2, 2], [1, 2]) => false
    areArraysEqual(arr1, arr2) {
      arr1.sort();
      arr2.sort();
      return (arr1.toString() === arr2.toString());
    }
};
