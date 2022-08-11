const calculate = (sum, itemsInCart, promoCode) => {
    if(itemsInCart > 10) {
        sum = sum - sum*0.03;
    } 

    if(sum > 35000) {
        sum = sum - (sum - 35000)*0.15;
    }

    if(promoCode === "METHED") {
        sum = sum - sum*0.1;
    }

    if(sum > 2000 && promoCode === "G3H2Z1") {
        sum = sum - 500;
    }
    return Math.ceil(sum);
}

console.log(calculate(38000, 12, "METHED"));
