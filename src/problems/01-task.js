var task1 = {
    //написать логику для подсчета суммы от 1 до n
    sumFromOneToN: function (n) {
      let sum = 0;

      for (let i = 0; i <= n; i++ ) {
        sum += i;
      };

      return sum;
    },

    //на входе массив объектов, среди которых могут быть числа
    //вернуть сумму всех чисел, что есть в массиве, если чисел нет - вернуть 0
    totalSum: function(array) {
      let sum = 0;

      for (let i = 0; i < array.length; i++ ) {
        if (typeof array[i] === "number") sum += array[i];
      };

      return sum;
    },

    //ф-ция должна возвращать true, если элемент elem присутствует в массиве, иначе false
    includes: function(array, elem) {
      return array.includes(elem,0);
    },

    //на входе 2 массива, вернуть массив, в котором будут элементы из этих 2х массивов
    concat: function(array1, array2) {
      const newArray = array1.concat(array2);
      return  newArray;
    },

    /*написать ф-цию объеденения 2х массивов в 1 таким образом, что сначала  идут первые элемент, потом вторые элементы и тд
    если массивы содержать разное кол-во элементов, то все элементы, после одинакового кол-ва просто дописать в конец результирующего массива
    combine([1, 2, 3], ['a', 'b', 'c', 'd'])
    [1, 'a', 2, 'b', 3, 'c', 'd']
     */
    combine: function(array1, array2) {
      let newArray = [] ;
      let lengthArray = array1.length;
      let j = 0;
      if (lengthArray < array2.length) lengthArray = array2.length;

      for (let i = 0; i < lengthArray; i++) {
        if (array1[i]){
          newArray[j] = array1[i];
          j++;
        };
        if (array2[i]){
          newArray[j] = array2[i];
          j++;
        }
      };  

      return newArray;
    }
};