'use strict';

// Скопируйте код task02.js в task03.js

// Добавьте 4-ый опциональный параметр у функции


//  4-ый опциональный параметр это строка:

// если функция получает 'even', то функция возвращает массив чётных чисел
// если функция получает 'odd', то функция возвращает массив нечётных чисел

{
const arr = [];

const generatorArr = (amount, n, m, str) => {

    for(let i = 0; i < amount; i++) {
        if(n < m) {
            arr.push(Math.round(Math.random() * (m - n + 1) + n));
        } else {
            arr.push(Math.round(Math.random() * (n - m + 1) + m));
        }
        
    }
    
    const evenOnly = arr.filter(function (n) {
        const remainder = n % 2
      
        return remainder === 0
    })

    const oddOnly = arr.filter(function (n) {
        const remainder = n % 2
      
        return remainder !== 0
    })

    if(str == 'even') {
        return evenOnly;
    }

    if(str == 'odd') {
        return oddOnly;
    }
}

console.log(generatorArr(10, -5, 30, 'odd'));
}