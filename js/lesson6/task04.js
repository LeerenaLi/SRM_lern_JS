const allCashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];

  

  const getAveragePriceGoods = (arr) => {
    let sum = arr[0].slice();

    for(row = 1; row < arr.length; row++) {
        for(col = 0; col < sum.length; col++) {
          sum[col] += arr[row][col];
        }
    }

    let averageCheck = Math.floor(sum[1] / sum[0]);
    return averageCheck;
    
  }

  console.log(getAveragePriceGoods(allCashbox));