'use strict';

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 73 рубля.

const dollar = 1.2;
const rub = 73;

const converter = (priceInEuro) => {
    const priceInRub = priceInEuro * dollar * rub;
    return priceInRub;
}

console.log(converter(100));