'use strict';

// Усовершенствуйте игру, которую написали в game01

// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30% от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
let max;
let min;
let userNum;
let count = 1;
const arr = [];
const rangeArr = [];

start: while(isNaN(num1) || isNaN(num2) || num1 == null || num2 == null || num1 == "" || num2 == "") {
    alert('Введите число');
    num1 = +prompt('Введите первое число');
    num2 = +prompt('Введите второе число');
    continue start;
} 

if(num1 > num2) {
    max = num1;
    min = num2;
} else {
    max = num2;
    min = num1;
}

let hiddenNum = Math.round(Math.random() * (max - min + 1) + min);

console.log(hiddenNum);

for(let i = min; i <= max; i++) {
    rangeArr.push(i);
}

let attempts;

if(rangeArr.length >= 50 && rangeArr.length <= 100) {
    attempts = 15;
} else {
    attempts = Math.ceil(rangeArr.length * 0.3);
}

console.log(rangeArr);
console.log(attempts);

while(userNum = prompt(`Угадай число от ${min} до ${max}, у тебя ${attempts} попыток`)) {
    

    if((count - 1) == attempts) {
        alert('Попытки закончились!');
        break;
    }

    if(arr.some(num => num === +userNum)) {
        alert('Это число вы уже вводили');
        arr.pop(+userNum);
        count = count - 1;
    }

    if(userNum > hiddenNum) {
        alert('Меньше! Введи новый вариант');
        arr.push(+userNum);
        count = count + 1;
    }
        
    else if(userNum < hiddenNum) {
        alert('Больше! Введи новый вариант');
        arr.push(+userNum);
        count = count + 1;
    }
        
    else if(userNum == hiddenNum) {
        alert('Правильно!');
        arr.push(+userNum);
        count = count + 1;
        break;
    }   
}

console.log(userNum);

console.log(count);
console.log(arr);



