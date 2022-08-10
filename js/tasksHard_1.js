const profit = +prompt("Ваш доход:");

if(profit <= 15000) {
    console.log("Налог 13%, равен " + profit*0.13 + " руб.");
} else if (profit > 15000 && profit < 50000) {
    console.log("Налог 20%, равен " + profit*0.2 + " руб.")
} else {
    console.log("Налог 30%, равен " + profit*0.3 + " руб.")
}

const progressProfit = +prompt("Ваш доход для прогрессивного налога:");

if(progressProfit <= 15000) {
    console.log("Налог 13%, равен " + progressProfit*0.13 + " руб.");
} else if (progressProfit > 15000 && progressProfit < 50000) {
    console.log("Налог 20% после 15т.р, равен " + ((15000*0.13) + (progressProfit - 15000)*0.2) + " руб.")
} else {
    console.log("Налог 30% после 50т.р, равен " + ((15000*0.13) + (35000*0.2)+ (progressProfit - 50000)*0.3) + " руб.")
}

