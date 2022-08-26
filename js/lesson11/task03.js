'use strict';

// Создать объект rectangle, который описывает ширину и высоту
// (свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и
// два геттера для получения периметра и площади прямоугольника

// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"

// По умолчанию значения высоты и ширины заданы 5 см

const rectangle = {
    width: 5,
    height: 5,
    set newWidth(value) {
        this.width = +value;
    },
    set newHeight(value) {
        this.height = +value;
    },
    get perimeter() {
        const per = (this.width + this.height) * 2;
        return `периметр ${per} см`;
    },
    get square() {
        const sqr = this.width * this.height;
        return `площадь ${sqr} см`;
    },
};

rectangle.newHeight = 8;
rectangle.newWidth = 11;
console.log(rectangle.perimeter);
console.log(rectangle.square);
