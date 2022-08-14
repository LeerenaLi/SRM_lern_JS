'use strict';

// ✔ Запросите у пользователя "Наименование товара" с помощью функции prompt и запишите в константу
// ✔ Аналогичные действия сделайте с константами "Количество товара", "Категория товара" и "Цена товара"
// ✔ Выведите в консоль тип данных, убедитесь что количество и цена тип данных numbers, если это не так-то поправьте
// ✔ В консоль выведите строку со значением количество товара, наименование и общую сумма 
// пример: "На складе 3 единицы товара "Приставка денди" на сумму 6600 деревянных"

{
    const productsName = 'Навигационная система Soundmax';
    const productsAmount = 5;
    const productsCategory = 'Техника для дома';
    const productsPrice = 100;

    console.log(productsName);
    console.log(productsAmount*productsPrice);
}

// Модуль 4 урок 3

// В прошлом задании вы от пользователя получали количество товара и цену.
// ✔ С помощью конструкции if (else) убедитесь, что пользователь ввёл число
// ✔ Если число, то всё должно работать как и в прошлом задании
// ✔ Если пользователь вёл не число, то вывести сообщение "Вы ввели некорректные данные"
// ✔ Других сообщений в консоли быть не должно.

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

