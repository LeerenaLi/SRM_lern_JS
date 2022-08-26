'use strict';

// Напишите рекурсивную функцию, которая принимает один параметр массив,
// генерирует целое число от 0 до 10 включительно и добавляет его в массив.

// Каждый раз после добавления нового числа проверяет сумму элементов массива,
// если она меньше 50 запускается снова передавая себе массив.
// Если сумма больше 50-ти, то функция возвращает этот массив.

const recur = (arr) => {
    const num = Math.floor(Math.random() * 11);
    arr.push(num);
    console.log(arr);
    const sum = arr.reduce((total, item) => {
        total += item;
        return total;
    }, 0);
    console.log(sum);
    if (sum <= 50) {
        recur(arr);
    } else {
        return arr;
    }
};

recur([1, 5, 3]);

