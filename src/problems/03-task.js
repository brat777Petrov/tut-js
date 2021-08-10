const task3 = {
    /*
    isPalindrome('a') => true;
    isPalindrome('abc') => false;
    isPalindrome('aabbaa') => true;
     */
    isPalindrome: function(str) {
      for ( i = 0; i <= str.length - i - 1; i++ ) {
 		if ( str[i] !== str[str.length - i-1] || i === str.length - i -1 ) {
	 		if (str.length > 1) {
	 		   return false;
	 		}
 		 }
 	   }
 	  return true;
    },

    /*
    charCount('abc') => a: 1, b: 1, c: 1
    charCount('Hello') => H: 1, e: 1, l: 2, o: 1
     */
    charCount: function(str) {
      let char = {};
      for (let i =0; i < str.length; i++) {
        if (!char[str[i]]) {
          char[str[i]] = 1;
        } else {
          char[str[i]] += 1;
        }
      }
     
      let result ='';
      for ( let key in char) {
       result += key + ': ' + char[key] + ', ';
      }
 
      return result.slice(0,result.length - 2);
    },

    /*
    areAnagrams('anagram', 'nag a ram') => true;
    areAnagrams('Eleven plus two', 'Twelve plus one'); => true;
    areAnagrams('O, Draconian devil', 'Leonardo da Vinci') => true;
     */
    areAnagrams: function(str1, str2) {
      const strNew1 = str1.toLowerCase().match(/\w/g).sort();
      const strNew2 = str2.toLowerCase().match(/\w/g).sort();
      
      return (charCount(strNew1) === charCount(strNew2));
    },
};
