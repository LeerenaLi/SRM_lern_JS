'use strict';

// + Четвертая задача (необязательная):

// Создайте файл task04.js

// Необходимо написать функцию, которая принимает 2 параметра n и m

// И возвращает массив с високосными годами в диапазоне между n и m

// Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора

// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

{
const array = [];
let min;
let max;
let leap;

const leapYear = (n, m) => {
    if(n > m) {
        max = n;
        min = m;
    } else {
        max = m;
        min = n;
    }

    for(let i = min; i <= max; i++) {
        array.push(i);
    }
    
    const leapArray = [];

    const findLaepYear = (year) => {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            leap = year;
            return leap;
        } else {
            return false;
        }
    }

    array.forEach(function(leap) {
        if(findLaepYear(leap)) {
            leapArray.push(leap);
        }
    })

    return leapArray;
    
}

console.log(leapYear(1980, 2020));
}