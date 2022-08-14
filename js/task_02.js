'use strict';

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие

// Пример:  "привет Мир" => "Привет мир"

const modifideString = (incorrectString) => {
    const correctString = incorrectString.slice(0, 1).toUpperCase() + incorrectString.substring(1).toLowerCase();
    return correctString;
}

console.log(modifideString("привет Мир"));