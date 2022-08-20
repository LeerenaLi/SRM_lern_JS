'use strict';

// Напишите функцию генератор  массива случайных чисел в файле task01.js
// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;

{
const arr = [];
const min = 1;
const max = 100;

const generatorArr = (amount) => {
    for(let i = 0; i < amount; i++) {
        arr.push(Math.round(Math.random() * (max - min + 1) + min));
    }
    
    return arr;
}

console.log(generatorArr(10));
}