const task2 = {
    /*на входе строка @srcString, в которой слова разделены пробелами, и ch - символ, из которого будем "рисовать" рамку
    вывести строку на консоль, так что-бы каждое слово было в новой строке а весь вывод был в текстовой псевдорамке
    например
    printInFrame('This string will be printed in frame', '*');
    ***********
    * This    *
    * string  *
    * will    *
    * be      *
    * printed *
    * in      *
    * frame   *
    * *********
     */
    printInFrame: function(srcString, ch) {
      let arrayWord = srcString.split(' ');
      
      //*** maxLength ***
      let lineChar = '';
      let arrayChar = [];
      let maxLengthEl = 0;
      for ( let i = 0; i < arrayWord.length; i++ ) {
        arrayChar = arrayWord[i].split('');
        if (arrayChar.length > maxLengthEl) maxLengthEl = arrayChar.length;
      };
      for ( let i = 0; i < (maxLengthEl + 4); i++ ) {
        lineChar += ch;
      }
     
      //*** print frame ***/
      console.log(lineChar);
      let longSpace = '';
      for ( let i = 0; i < arrayWord.length; i++ ) {
        for ( let j = 0; j < (maxLengthEl - arrayWord[i].length + 1); j++ ){
          longSpace += ' '; 
        };
        console.log(ch + ' ' + arrayWord[i] + longSpace + ch);
        longSpace = '';
      }
      console.log(lineChar);
    },

    /*
    reverseString('abc') => 'cba';
     */
    reverseString(str) {
      let arr = str.split('');
      arr.reverse();
      let strNew = arr.join('');
      return strNew;

    },
    /*
    reverseNumber(2) => 2
    reverseNumber(12345) => 54321
    reverseNumber(543210) => 12345
    reverseNumber(1020) => 201
    reverseNumber(-345) => -543
     */
    reverseNumber: function(n) {
      let arr = n.split('');
      arr.reverse();
  
      if ( n < 0) {
        arr.pop(arr[arr.length]);
        arr.unshift('-');
      }
      
      let numNew = arr.join('');
      return numNew;
    },
    /*
    capitalize('this string will be capitalized') => 'This String Will Be Capitalized'
     */
    capitalizeWords: function(str) {
      let arrWords = str.split(' ');
      let arrChars = [];
      let char;
      for ( let i = 0; i < arrWords.length; i++ ) {
        arrChars = arrWords[i].split('');
        char = arrChars[0]
        arrChars[0] = char.toUpperCase();
        arrWords[i] = arrChars.join('');
      }
      return arrWords.join(' ');
    },
    /*
    chunk([1, 2, 3, 4, 5], 3) => [[1, 2, 3], [4, 5]]
     */
    chunk: function(arr, chunkSize) {
      let arrLength = Math.ceil(arr.length/chunkSize);
      let arrNew = [];
      for ( i = ( arrLength - 1 ); i >= 0; i-- ) {
        arrNew[i] = arr.splice(i*chunkSize);
      }
      return arrNew
    }
};