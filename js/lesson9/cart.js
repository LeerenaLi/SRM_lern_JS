'use strict';

// Продолжим работу с cart.js
// Обнаружена уязвимость в нашем функционал
// Если после добавления последнего товара присвоить к totalPrice любое значение,
// например
// cart.totalPrice = 10;
// то при выводе print() общая стоимость корзины будет равна 10
// Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером,
//  который будет возвращать результат вызова метода calculateItemPrice
// метод getTotalPrice больше не нужен

// calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice

// Вызов метода calculateItemPrice оставить только у геттера totalPrice

const cart = {
    items: [],
    get totalPrice() {
      return  cart.calculateItemPrice();  
    },
    count: 0,
    add(productName = '', productPrice, productQuantity = 1) {
        const product = {
            productName: productName,
            productPrice: productPrice,
            productQuantity: productQuantity,
        };
        cart.items.push(product);
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
        const sum = cart.items.reduce((total, currentItem) => {
            total = total + currentItem.productPrice * currentItem.productQuantity;
            return total;
        },0); 
        return sum;
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

console.log(cart.items);

cart.print1();