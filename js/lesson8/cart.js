'use strict';

// Объект будет содержать следующие свойства:

// items = пустой массив - это товары
// totalPrice = 0 - общая стоимость корзины
// count = 0 - количество товаров

// и методы

// getTotalPrice - получить общую стоимость товаров
// метод возвращает значение свойства totalPrice

// add - добавить товар
// Принимает три параметра:
// название товара
// цену товара
// количество товара (опциональный параметр, по умолчанию 1 товар)
// этот метод формирует объект из полученных параметров и добавляет его в свойство items
// так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные

// increaseCount - увеличить количество товаров
// Принимает один параметр(число)
// Увеличивает свойство count на это число

// calculateItemPrice - посчитать общую стоимость товаров
// пересчитывает стоимость всей корзины и записывает значение в totalPrice 

// clear - очистить корзину
// Очищает полностью нашу корзину, возвращает все значения в изначальные

// print - распечатать корзину
// Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины

// let num = 0;

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice()  {
        cart.calculateItemPrice();
        return this.totalPrice;
    },
    add(productName = '', productPrice, productQuantity = 1) {
        const product = {
            productName: productName,
            productPrice: productPrice,
            productQuantity: productQuantity,
        };
        cart.items.push(product);
        // cart.calculateItemPrice();
        cart.getTotalPrice();
        cart.increaseCount(0);
    },
    increaseCount(num) {
        cart.items.reduce((totalCount, currentCount) => {
            totalCount = totalCount + currentCount.productQuantity;
            this.count = totalCount;
            return this.count;
        },0);

        return this.count += num;
    },
    calculateItemPrice() {
        cart.items.reduce((total, currentItem) => {
            total = total + currentItem.productPrice * currentItem.productQuantity;
            this.totalPrice = total;
            return this.totalPrice;
        },0); 
    },
    clear() {
        while(cart.items.length > 0) {
            cart.items.pop();
            this.totalPrice = 0;
            this.count = 0;
        }
    },
    print1() {
        const itemsStr = JSON.stringify(this.items);
        console.log(itemsStr);
        console.log(`Общая стоимость товаров: ${cart.totalPrice} руб.`);
    },
}

cart.add('one', 100, 2);
cart.add('two', 200, 1);
cart.add('three', 500, 1);

// cart.clear();
console.log(cart.items);

// console.log(cart.totalPrice);

// console.log(cart.count);

cart.print1();