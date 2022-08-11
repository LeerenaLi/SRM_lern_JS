const dollar = 1.2;
const rub = 73;

const converter = (priceInEuro) => {
    const priceInRub = priceInEuro * dollar * rub;
    return priceInRub;
}

console.log(converter(100));