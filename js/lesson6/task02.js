const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

// const getAverageValue = (allCashbox) => {
//     let sum = 0;
//     let check = 0;
//     for(let i = 0; i < allCashbox.length; i++) {
//         sum += allCashbox[i];
//     }
//     return check = Math.floor(sum / allCashbox.length);
// }

// второе решение:

const getAverageValue = (allCashbox) => {
    const sum = allCashbox.reduce((total, currentItem) => {
        total += currentItem;
        return total;
    }, 0);
    const check = Math.floor(sum / allCashbox.length);
    return check;
}


console.log(getAverageValue(allCashbox));