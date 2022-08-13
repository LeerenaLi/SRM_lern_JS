const getAverageValue = (allCashbox) => {
    let sum = 0;
    let check = 0;
    for(let i = 0; i < allCashbox.length; i++) {
        sum += allCashbox[i];
    }
    return check = Math.floor(sum / allCashbox.length);
}

console.log(getAverageValue([4500, 3210, 650, 1250, 7830, 990, 13900, 370]));