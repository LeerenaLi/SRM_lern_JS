'use strict';

// Необходимо реализовать функционал игры "Камень ножницы бумага"
// Функционал продемонстрирован видео в уроке!
// Нужно использовать 2 файла:
// game.js, котором будет происходить действия игры
// script.js в котором эта игра будет запускаться

// Пригодится функция getRandomIntInclusive,
// чтобы помочь сделать ход компьютеру.

// Как будет написана программа внутри IIFE модуля, решать только вам,
// важно выполнить определенные требования
// 1) В функции game() реализуется сам механизм игры.
// 2) Результат поединка и выбранный язык должны храниться в замыкании
// и реализация данной игры должна быть сделана с помощью
// рекурсии без единого цикла
// Если пользователь нажимает "отмена" переспрашиваем его
// "точно ли он хочет выйти?"
// Если да то выводится результат всех игр
// (сколько очков у пользователя и у компьютера)
// Если пользователь передумал выходить,
// то игра продолжается дальше сохраняя прежние очки

(() => {
    const lang = ['камень', 'ножницы', 'бумага'];


    const game = () => {
        const result = {
            player: 0,
            computer: 0,
        };

        const startGame = () => {
            const answer = prompt(`${lang.join(', ')} ?`);
            if (answer === null) {
                const exit = prompt(`Вы точно хотите выйти? да/нет`);
                if (exit === 'да') {
                    alert(`Результат:
                    Вы: ${result.player} Компьютер: ${result.computer}`);
                    result.player = false;
                    result.computer = false;
                    console.log(result.player);
                    console.log(result.computer);
                    return;
                } else {
                    return startGame();
                }
            }

            const findAnswer = (arr, n) => {
                // не понимаю, как здесь сделать рекурсию а не цикл
                for (let i = 0; i < arr.length; ++i) {
                    if (arr[i].indexOf(n) === 0) {
                        return arr[i];
                    }
                }
                return false;
            };

            const userChoise = findAnswer(lang, answer.toLowerCase());
            console.log(userChoise);

            const findComputerAnswer = (arr, hiddenNum) => {
                if (hiddenNum === 0) {
                    return arr[0];
                }
                if (hiddenNum === 1) {
                    return arr[1];
                }
                if (hiddenNum === 2) {
                    return arr[2];
                }
            };

            const computerChoise =
            findComputerAnswer(lang, Math.floor(Math.random() * 3));
            console.log(computerChoise);

            const findChampion = () => {
                if (result.player === false && result.computer === false) {
                    return;
                }
                if (userChoise === computerChoise) {
                    result.player += 1;
                    result.computer += 1;
                    alert(`Вы: ${userChoise} | Компьютер: ${computerChoise}
                    Очки:
                    Вы: ${result.player}
                    Компьютер: ${result.computer}`);
                }
                if (userChoise === 'камень' && computerChoise === 'ножницы' ||
                    userChoise === 'ножницы' && computerChoise === 'бумага' ||
                    userChoise === 'бумага' && computerChoise === 'камень') {
                    result.player += 1;
                    result.computer += 0;
                    alert(`Вы: ${userChoise} | Компьютер: ${computerChoise}
                    Очки:
                    Вы: ${result.player}
                    Компьютер: ${result.computer}`);
                }
                if (userChoise === 'камень' && computerChoise === 'бумага' ||
                    userChoise === 'ножницы' && computerChoise === 'камень' ||
                    userChoise === 'бумага' && computerChoise === 'ножницы') {
                    result.player += 0;
                    result.computer += 1;
                    alert(`Вы: ${userChoise} | Компьютер: ${computerChoise}
                    Очки:
                    Вы: ${result.player}
                    Компьютер: ${result.computer}`);
                }
                startGame();
                findChampion();
            };
            findChampion();
        };
        startGame();
    };

    return game();

    window.newGame = game;
})();


