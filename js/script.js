'use strict';

const productsName = 'Навигационная система Soundmax';
const productsAmount = 5;
const productsCategory = 'Техника для дома';
const productsPrice = 100;

// console.log(productsName);
// console.log(productsAmount*productsPrice);

// Модуль 4 урок 3

const product = prompt("Наименование товара", '');
const amount = +prompt("Количество товара", '');
const category = prompt("Категория товара", '');
const price = +prompt("Цена товара", '');

// console.log(typeof(product));
// console.log(typeof(amount));
// console.log(typeof(category));
// console.log(typeof(price));

if(isNaN(amount) || isNaN(price) || amount < 1 || price < 1) {
    console.log("Вы ввели некорректные данные");
}
else {
    console.log("На складе " + amount + " единицы товара " + product + " на сумму " + amount * price + " рублей");
}



