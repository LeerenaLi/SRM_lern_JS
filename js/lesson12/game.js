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
    const figuresEng = ['rock', 'scissors', 'paper'];
    const figuresRu = ['камень', 'ножницы', 'бумага'];


    const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        };

        const lang = language === 'ENG' || language === 'EN' ?
            figuresEng : figuresRu;

        const exitRu = 'Вы точно хотите выйти? да/нет';
        const exitEn = 'You want to end the game?';
        const exitLang = lang === figuresEng ? exitEn : exitRu;

        const totalRu = 'Результат:';
        const totalEn = 'Total:';
        const total = lang === figuresEng ? totalEn : totalRu;

        const youRu = 'Вы:';
        const youEn = 'You:';
        const you = lang === figuresEng ? youEn : youRu;

        const compRu = 'Компьютер:';
        const compEn = 'Computer:';
        const comp = lang === figuresEng ? compEn : compRu;

        const correctRu = 'Введите корректные данные';
        const correctEn = 'Enter correct data';
        const correct = lang === figuresEng ? correctEn : correctRu;


        const startGame = () => {
            const answer = prompt(`${lang.join(', ')} ?`);
            if (answer === null) {
                const exit = confirm(`${exitLang}`);
                if (exit === true) {
                    alert(`${total} 
                    ${you} ${result.player} ${comp} ${result.computer}`);
                    result.player = false;
                    result.computer = false;
                    console.log(result.player);
                    console.log(result.computer);
                    return;
                } else {
                    return startGame();
                }
            }

            const userIndex = lang.indexOf(answer.toLowerCase());

            if (userIndex === -1) {
                alert(`${correct}`);
                startGame();
            }
            console.log(userIndex);

            const userChoise = lang[userIndex];
            console.log(userChoise);

            const computerIndex = Math.floor(Math.random() * 3);
            console.log(computerIndex);

            const computerChoise = lang[computerIndex];
            console.log(computerChoise);

            const findChampion = () => {
                if (result.player === false && result.computer === false) {
                    return;
                }
                if (userIndex === computerIndex) {
                    result.player += 1;
                    result.computer += 1;
                    alert(`${you} ${userChoise} | ${comp} ${computerChoise}
                    ${total}
                    ${you} ${result.player}
                    ${comp} ${result.computer}`);
                }
                if (userIndex === 0 && computerIndex === 1 ||
                    userIndex === 1 && computerIndex === 2 ||
                    userIndex === 2 && computerIndex === 0) {
                    result.player += 1;
                    result.computer += 0;
                    alert(`${you} ${userChoise} | ${comp} ${computerChoise}
                    ${total}
                    ${you} ${result.player}
                    ${comp} ${result.computer}`);
                } else {
                    result.player += 0;
                    result.computer += 1;
                    alert(`${you} ${userChoise} | ${comp} ${computerChoise}
                    ${total}
                    ${you} ${result.player}
                    ${comp} ${result.computer}`);
                }
                startGame();
                findChampion();
            };
            findChampion();
        };
        return startGame();
    };

    window.newGame = game;
})();


