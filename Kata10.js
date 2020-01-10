let calculateChange = function(total, cash) {
  let change = cash - total;
  let finalResult = {};
  if (Math.trunc(change / 2000) > 0) {
    finalResult['Twenty dollars'] = (Math.trunc(change / 2000));
    change = change - Math.trunc(change / 2000) * 2000;
  } 
  if (Math.trunc(change / 1000) > 0) {
    finalResult['Ten dollars'] = (Math.trunc(change / 1000));
    change = change - Math.trunc(change / 1000) * 1000;
  } 
  if (Math.trunc(change / 500) > 0) {
    finalResult['Five dollars'] = (Math.trunc(change / 500));
    change = change - Math.trunc(change / 500) * 500;
  } 
  if (Math.trunc(change / 200) > 0) {
    finalResult['Two dollars'] = (Math.trunc(change / 200));
    change = change - Math.trunc(change / 200) * 200;
  } 
  if (Math.trunc(change / 100) > 0) {
    finalResult['One dollar'] = (Math.trunc(change / 100));
    change = change - Math.trunc(change / 100) * 100;
  } 
  if (Math.trunc(change / 25) > 0) {
    finalResult['Quarter'] = (Math.trunc(change / 25));
    change = change - Math.trunc(change / 25) * 25;
  }
  if (Math.trunc(change / 10) > 0) {
    finalResult['Dime'] = (Math.trunc(change / 10));
    change = change - Math.trunc(change / 10) * 10;
  }
  if (Math.trunc(change / 5) > 0) {
    finalResult['Nickel'] = (Math.trunc(change / 5));
    change = change - Math.trunc(change / 5) * 5;
  }
  if (Math.trunc(change / 1) > 0) {
    finalResult['Penny'] = (Math.trunc(change / 1));
    change = change - Math.trunc(change / 1) * 1;
  }
  return finalResult;

};

console.log(calculateChange(1787, 2000)); //{ twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

/*Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollar
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢) */
// var calculateChange = function(total, cash) {
//   var change = (cash - total)*100;
//   var cashCount = {twentyDollar:0, tenDollar:0, fiveDollar:0, twoDollar:0, oneDollar:0,
//   quarter:0, dime:0, nickel:0, penny:0};
  
//   var i = change;
//   while (i > 0) {
//     if (i - 2000 >= 0) {
//       cashCount.twentyDollar += 1;
//       i -= 2000;
//     }
//     if (i - 1000 >= 0) {
//       cashCount.tenDollar += 1;
//       i -= 1000;
//     }
//     else if (i - 500 >= 0) {
//       cashCount.fiveDollar += 1;
//       i -= 500;
//     }
//     else if (i - 200 >= 0) {
//       cashCount.twoDollar += 1;
//       i -= 200;
//     }
//     else if (i - 100 >= 0) {
//       cashCount.oneDollar += 1;
//       i -= 100;
//     }
//     else if (i - 25 >= 0) {
//       cashCount.quarter += 1;
//       i -= 25;
//     }
//     else if (i - 10 >= 0) {
//       cashCount.dime += 1;
//       i -= 10;
//     }
//     else if (i - 5 >= 0) {
//       cashCount.nickel += 1;
//       i -= 5;
//     }
//     else if (i - 1 >= 0) {
//       cashCount.penny += 1;
//       i -= 1;
//     }
//     else if (i - 0.9 >= 0) {
//       cashCount.penny += 1;
//       i -= 0.9;
//     }
//     else {
//       break;
//     }
//   }
//   if (cashCount.twentyDollar === 0){
//     delete cashCount.twentyDollar;
//   }
//   if (cashCount.tenDollar === 0){
//     delete cashCount.tenDollar;
//   }
//   if (cashCount.fiveDollar === 0){
//     delete cashCount.fiveDollar;
//   }
//   if (cashCount.twoDollar === 0){
//     delete cashCount.twoDollar;
//   }
//   if (cashCount.oneDollar === 0){
//     delete cashCount.oneDollar;
//   }
//   if (cashCount.quarter === 0){
//     delete cashCount.quarter;
//   }
//   if (cashCount.dime === 0){
//     delete cashCount.dime;
//   }
//   if (cashCount.nickel === 0){
//     delete cashCount.nickel;
//   }
//   if (cashCount.penny === 0){
//     delete cashCount.penny;
//   }
//   return cashCount;
//   }
  
//   console.log(calculateChange(17.87, 20));
//   console.log(calculateChange(26.23, 40));
//   console.log(calculateChange(5.01, 10));

// var calculateChange = function(total, cash) {
//   var denominations = {
//     'twentyDollar': 20,
//     'tenDollar': 10,
//     'fiveDollar': 5,
//     'twoDollar': 2,
//     'oneDollar': 1,
//     'quarter': 0.25,
//     'dime': 0.10,
//     'nickel': 0.05,
//     'penny': 0.01
//   };
//   var changeTotal = cash - total;
//   return getChangeAmounts(changeTotal, denominations);
// };

// var getChangeAmounts = function(changeTotal, denominations) {
//   var remainder = changeTotal;
//   var change = {};
//   for (var denominationName in denominations) {
//     if (denominations.hasOwnProperty(denominationName)) {
//       var denominationValue = denominations[denominationName];
//       if (remainder >= denominationValue) {
//         change[denominationName] = Math.floor(remainder / denominationValue);
//         remainder %= denominationValue;
//       }
//     }
//   }
//   return change;
// };

// console.log(calculateChange(17.87, 20));
//   // expected: { twoDollar: 1, dime: 1, penny: 3 }
// console.log(calculateChange(26.23, 40));
//   // expected: { ten: 1, twoDollar: 1, dollar: 1, quarter: 3, penny: 2 }
// console.log(calculateChange(5.01, 10));
//   // expected: { twoDollar: 2, quater: 3, dime: 2, penny: 4 }