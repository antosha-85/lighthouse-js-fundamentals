function range(start, end, step) {
  let arr = [];
  if (start === undefined || end === undefined || step === undefined || step <= 0 || start > end) {
    return undefined;
  }
  else {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(range(0, 10, 2));
