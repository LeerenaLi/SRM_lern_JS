'use strict';
{
    const productsName = 'Навигационная система Soundmax';
    const productsAmount = 5;
    const productsCategory = 'Техника для дома';
    const productsPrice = 100;

    console.log(productsName);
    console.log(productsAmount*productsPrice);
}

// Модуль 4 урок 3

{
    const productsName = prompt("Наименование товара", '');
    const productsAmount = +prompt("Количество товара", '');
    const productsCategory = prompt("Категория товара", '');
    const productsPrice = +prompt("Цена товара", '');

    // console.log(typeof(productsName));
    // console.log(typeof(productsAmount));
    // console.log(typeof(productsCategory));
    // console.log(typeof(productsPrice));

    if(isNaN(productsAmount) || isNaN(productsPrice) || productsAmount < 1 || productsPrice < 1) {
        console.log("Вы ввели некорректные данные");
    }
    else {
        console.log("На складе " + productsAmount + " единицы товара " + product + " на сумму " + 
                    productsAmount * productsPrice + " рублей");
    }

}

