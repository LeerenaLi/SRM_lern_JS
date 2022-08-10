const rain = Math.round(Math.random());

if(rain === 1) {
    console.log("Пошёл дождь. Возьмите зонт!");
}
if(rain === 0) {
    console.log("Дождя нет!");
}

const maths = +prompt("Введите кол-во баллов по математике");
const russian = +prompt("Введите кол-во баллов по русскому языку");
const informatics = +prompt("Введите кол-во баллов по информатике");

const result = maths + russian + informatics;

if(result >= 265) {
    console.log("Поздравляю, вы поступили на бюджет!");
} else {
    console.log("Сожалею, вы не поступили");
}


const moneySum = +prompt("Сколько денег вы хотите снять?");

if(moneySum % 100 === 0 && moneySum > 0) {
    console.log("Заберите купюры");
} else {
    console.log("Введите сумму, кратную 100р");
}
