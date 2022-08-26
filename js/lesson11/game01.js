'use strict';

// Написать простой игровой бот "Угадай число", который умеет следующее:

// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное,
// то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное,
// то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается

// Переписать игровой бот для игры "Угадай число"
// Функционал остаётся прежний, но вместо цикла (while или for)
// используйте рекурсию

// const hiddenNum = Math.floor(Math.random() * 100);
// let userNum = +prompt('Угадай число от 1 до 100');


const bot = (userNum, hiddenNum) => {
    console.log(hiddenNum);
    console.log(userNum);
    if (isNaN(userNum)) {
        alert('Введите число');
        return bot(userNum = +prompt('Угадай число от 1 до 100'), hiddenNum);
    }
    if (userNum === null || userNum === '' || userNum === 0) {
        alert('Game over');
        return hiddenNum;
    }

    if (userNum > hiddenNum) {
        alert('Меньше! Введи новый вариант');
        return bot(userNum = +prompt('Угадай число от 1 до 100'), hiddenNum);
    } else if (userNum < hiddenNum) {
        alert('Больше! Введи новый вариант');
        return bot(userNum = +prompt('Угадай число от 1 до 100'), hiddenNum);
    } else if (userNum === hiddenNum) {
        alert('Правильно!');
        return hiddenNum;
    }
};

bot(prompt('Угадай число от 1 до 100'), Math.floor(Math.random() * 100));


