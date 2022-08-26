'use strict';

// Продолжим работу в cart.js из предыдущего урока

// Методы объекта cart не должны обращаться к объекту по имени

// В объект cart добавьте сеттер setDiscount и свойство discount

// Сеттер setDiscount будет принимать promocode

// если promocode будет строка METHED,
// то в discount будет добавляться значение 15

// если promocode будет строка NEWYEAR,
//  то в discount будет добавляться значение 21

// метод calculateItemPrice должен учитывать скидку
// равную процентному значению discount

const cart = {
    items: [],
    count: 0,
    discount: 0,
    set setDiscount(promocode) {
        if (promocode === 'METHED') {
            this.discount = 15;
        }
        if (promocode === 'NEWYEAR') {
            this.discount = 21;
        }
    },
    get totalPrice() {
        return this.calculateItemPrice();
    },
    add(productName = '', productPrice, productQuantity = 1) {
        const product = {
            productName,
            productPrice,
            productQuantity,
        };
        this.items.push(product);
        this.increaseCount(0);
    },
    increaseCount(num) {
        this.items.reduce((totalCount, currentCount) => {
            totalCount += currentCount.productQuantity;
            this.count = totalCount;
            return this.count;
        }, 0);

        return this.count += num;
    },
    calculateItemPrice() {
        const sum = this.items.reduce((total, currentItem) => {
            total += currentItem.productPrice * currentItem.productQuantity;
            return total;
        }, 0);
        const discountSum = sum - (sum / 100 * this.discount);
        return discountSum;
    },
    clear() {
        while (this.items.length > 0) {
            this.items.pop();
            this.totalPrice = 0;
            this.count = 0;
        }
    },
    print1() {
        const itemsStr = JSON.stringify(this.items);
        console.log(itemsStr);
        console.log(`Общая стоимость товаров: ${this.totalPrice} руб.`);
    },
};

cart.add('one', 100, 2);
cart.add('two', 200, 1);
cart.add('three', 500, 1);

console.log(cart.items);

cart.setDiscount = 'METHED';
console.log(cart.discount);
console.log(cart.totalPrice);

cart.print1();
