const greatDivisor = (a, b) => {
    if (a == 0)
        return b;

    while (b != 0) {

        if (a > b){
            a = a - b;
        } else {
            b = b - a;                 
        }
            
    }
    return a;
}
console.log(greatDivisor(46, 78));



// while(b != 0) {
//     if (a > b){
//             a = a % b;
//             console.log(a);
//         }
//         else {
//             b = b % a;
//             console.log(b);
//         }
// }