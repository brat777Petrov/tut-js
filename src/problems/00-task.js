const task0 = {
    //вернуть сумму 3х чисел
    sum(a, b, c) {
        let sum = 0;
        sum = a+b+c; //ваш код тут
        return sum;
    },
    //вернуть сумму чисел, но надо учесть что аргументы могут быть не только числами, использовать оператор typeof в связке с if-else
    safeSum(a, b, c) {
        let sum = 0;
        if (typeof a === "number")   sum += a;//ваш код тут
        if (typeof b === "number")   sum += b;
        if (typeof c === "number")   sum += c;
        return sum;
    },
    // вернуть максимальное число
    max(a, b, c) {
        let m = a;
        if (m < b) m = b;//ваш код тут
        if (m < c) m = c;
        return m;
    },
    //вернуть минимальное число
    min(a, b, c) {
        let m = a;
        if (m > b) m = b;//ваш код тут
        if (m > c) m = c;
        return m;
    }
};
