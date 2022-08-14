'use strict';

// Напишите функцию addPrefix 
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически

// Входящий массив:

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
    
    const newArr = arr.map((element) => prefix + ' ' + element);

    return newArr;
}

console.log(addPrefix(names, 'Mr'));