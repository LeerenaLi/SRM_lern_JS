'use strict';

const Cart = function(goods = []) {
    this.goods = goods;
    this.totalPrice = 0;
    this.count = 0;
}

Cart.prototype.getTotalPrice = function () {
    this.calculateGoodsPrice();
    return this.totalPrice;
}

Cart.prototype.addGoods = function (product) {
    this.goods.push(product);
    this.getTotalPrice();
    this.increaseCount();
}

Cart.prototype.increaseCount = function () {
    this.count += 1;
    return this.count;
}

Cart.prototype.calculateGoodsPrice = function () {
    this.goods.reduce((total, currentItem) => {
        total += currentItem.productPrice - Math.floor(currentItem.productPrice / 100 * currentItem.discount);
        this.totalPrice = total;
        return this.totalPrice;
    },0); 
}

Cart.prototype.clear = function () {
    while(this.goods.length > 0) {
        this.goods.pop();
        this.totalPrice = 0;
        this.count = 0;
    }
}

Cart.prototype.print = function () {
    const itemsStr = JSON.stringify(this.goods);
    console.log(itemsStr);
    console.log(`Общая стоимость товаров: ${this.totalPrice} руб.`);
}



const Goods = function (productName = '', productPrice, discount = 0) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.discount = discount;
}

const FoodGoods = function (productName, productPrice, discount, calories) {
    Goods.call(this, productName, productPrice, discount);
    this.calories = calories;
}

const СlothingGoods = function (productName, productPrice, discount, material = '') {
    Goods.call(this, productName, productPrice, discount);
    this.material = material;
}

const TechnicsGoods = function (productName, productPrice, discount, typeTechnics = '') {
    Goods.call(this, productName, productPrice, discount);
    this.typeTechnics = typeTechnics;
}

const kettle = new Goods('Electric kettle Tefal', 3500, 2);

const apples = new FoodGoods('apples', 150, 5, 47);

const dress = new СlothingGoods('Dress red', 2500, 0, 'cotton');

const notebook = new TechnicsGoods('notebook Dell', 88000, 3, 'notebook');

const cart = new Cart();
cart.addGoods(kettle);
cart.addGoods(apples);
cart.addGoods(dress);
cart.addGoods(notebook);

console.log(cart);
cart.print();