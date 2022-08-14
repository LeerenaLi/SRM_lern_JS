'use strict';

// Напишите функцию, которая принимает строку и возвращает обратную строку

// Пример: "Привет мир" => "рим тевирП"

const reverseString = (str) => {
    let reverse = "";
    for(let i = str.length -1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

console.log(reverseString("Привет мир"));
