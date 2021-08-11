const basicsTask = {
    //если n целое число то вернуть true, иначе false
    isIntegerNumber(n) {
      return (parseInt(n) === n);
    },
    //ф-ция должна уметь округлить число n до l знаков после запятой, 1 <= l <= 10
    //roundNumber(0.66666666, 2) => 0.67
    //roundNumber(1, 1) => 1.0
    roundNumber(n, l) {
      return n.toFixed(l);
    },
    //на входе массив чисел
    //ф-ция должна вернуть массив процентовб т.е. сколько процентов занимает каждое число от общей суммы
    //percentage([1, 1]) => [0.5, 0.5]
    //percentage([1, 2, 3]) => [0.17, 0.33, 0.6]
    percentage(numbers) {
      const sumArr = numbers.reduce(function(sum, current){
        return sum + current;
      })
      const result = numbers.map(function(el){
        return (el/sumArr).toFixed(2);
      })
       
      return result;
    }
};
