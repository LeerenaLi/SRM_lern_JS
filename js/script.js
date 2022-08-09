'use strict';

const productsName = 'Навигационная система Soundmax';
const productsAmount = 5;
const productsCategory = 'Техника для дома';
const productsPrice = 100;

console.log(productsName);
console.log(productsAmount*productsPrice);

// Модуль 4 урок 2

const product = prompt("Наименование товара", '');
const amount = +prompt("Количество товара", '');
const category = prompt("Категория товара", '');
const price = +prompt("Цена товара", '');

console.log(typeof(product));
console.log(typeof(amount));
console.log(typeof(category));
console.log(typeof(price));

console.log("На складе " + amount + " единицы товара " + product + " на сумму " + amount * price + " рублей");