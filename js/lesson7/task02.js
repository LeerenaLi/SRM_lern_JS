'use strict';
// Скопируйте код task01.js в task02.js

// Продолжаем работать с предыдущей функцией

// Функция принимает еще два параметра n и m

// Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
// m и n включительно

// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

{
const arr = [];

const generatorArr = (amount, n, m) => {

    for(let i = 0; i < amount; i++) {
        if(n < m) {
            arr.push(Math.round(Math.random() * (m - n + 1) + n));
        } else {
            arr.push(Math.round(Math.random() * (n - m + 1) + m));
        }
        
    }
    
    return arr;
}

console.log(generatorArr(10, -5, 30));
}



