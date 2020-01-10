const multiplicationTable = function(maxValue) {
  let result = '';
  for (var i = 1; i <= maxValue; i++) {
     for (var j = 1; j <= maxValue; j++) {
         result += (i*j) + ' ';
     }
     result += '\n'
  } return result; 
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
