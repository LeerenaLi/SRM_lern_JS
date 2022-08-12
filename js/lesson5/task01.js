'use strict';

for(let i = 1; i <= 10; i++) {
    console.log('------------------');
    for(let pow = 1; pow <= 10; pow++) {
        console.log(`${i} в степени ${pow} = ${i**pow}`);
    }
}