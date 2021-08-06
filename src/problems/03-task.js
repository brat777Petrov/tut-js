const task3 = {
    /*
    isPalindrome('a') => true;
    isPalindrome('abc') => false;
    isPalindrome('aabbaa') => true;
     */
    isPalindrome: function(str) {
      const arrChars = str.split('');
      const arrCharsReverse = str.split('').reverse();

      for ( i = 0; i < arrChars.length; i++ ) {
        if (arrChars[i] != arrCharsReverse[i]) return false;
      }
      return true;
    },

    /*
    charCount('abc') => a: 1, b: 1, c: 1
    charCount('Hello') => H: 1, e: 1, l: 2, o: 1
     */
    charCount: function(str) {
      let char = [];
      let countChar = [];
      let flagNew;
      const strChar = str.split('');
      char[0] = strChar[0];
      countChar[0] = 1;
          
      for ( let i = 1; i < strChar.length; i++ ) {
        flagNew = true;
        for (let j = 0; j < char.length; j++ ) {
          if (strChar[i] === char[j]) {
            countChar[j]++;
            flagNew = false;
          }
        }
        if ( flagNew ) {
          char.push(strChar[i]);
          countChar[char.length-1] = 1;
        }
      }
      
      let answer = '';
      for ( let i = 0; i < char.length; i++ ) {
        answer += char[i] + ': ' + countChar[i];
        if ( i != (char.length - 1) ) answer += ', ';
      }
    
      return answer;
    },

    /*
    areAnagrams('anagram', 'nag a ram') => true;
    areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
    areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
     */
    areAnagrams: function(str1, str2) {
      const newStr1 = str1.toLowerCase(); 
      const newStr2 = str2.toLowerCase();
      let arr1 = newStr1.match(/\w/gi).sort();
      let arr2 = newStr2.match(/\w/gi).sort();
      
      for ( let i = 0; i < arr1.length; i++ ) {
        if ( arr1[i] != arr2[i] ) return false;
      }
      return true;
    },
};