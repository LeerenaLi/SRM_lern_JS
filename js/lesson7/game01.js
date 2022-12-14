'use strict';

// Написать простой игровой бот "Угадай число", который умеет следующее:

// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

{
    const hiddenNum = Math.floor(Math.random() * 100);
    let userNum;

    console.log(hiddenNum);


    while (userNum = prompt('Угадай число от 1 до 100')) {
        if (isNaN(userNum)) {
            alert('Введите число');
        } else if (userNum > hiddenNum) {
            alert('Меньше! Введи новый вариант');
        } else if (userNum < hiddenNum) {
            alert('Больше! Введи новый вариант');
        } else if (userNum == hiddenNum) {
            alert('Правильно!');
            break;
        } else if (userNum == null || userNum == '') {
            break;
        }
    }


    console.log(userNum);
}
