'use strict';

// Получите от пользователя 2 числа
// Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов
// Не используйте Math.max и Math.min

const minNumber = (num1, num2) => {
    const min = (num1 + num2 - Math.abs(num1 - num2)) / 2;
    return min;
}

console.log(minNumber(num1 = +prompt("Введите первое число"), num2 = +prompt("Введите второе число")));