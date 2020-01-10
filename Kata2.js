var conditionalSum = function(values, condition) {
  var sum = 0;
  for (i = 0; i < values.length; i++) {
    if (condition === "even" && values[i] % 2 === 0) {
        sum += values[i];
    }
    else if (condition === "odd" && values [i] %2 != 0) {
        sum += values[i];
    }
  }
  return sum;
};

