let a = [1, 2, 5, 2, 1, 8];
let b = [];
let len = a.length;

// first method for loop

// for (let i = 0; i < len; i++) {
//   if(b.indexOf(a[i]) === -1) {
//     b.push(a[i])
//   }
// }
// console.log(b);


// second method using sort()
// a.sort();

// let _temp;

// for (let i = 0; i < len; i++) {
//   if(a[i] !== _temp) {
//     b.push(a[i]);
//     _temp = a[i]
//   }
// }
// console.log(b)


// third method using object

// obj = {};

// for (let i of a) {
//   obj[i] = true;
// }

// b = Object.keys(obj);

// console.log(b)

// fourth method using Set

// [...new Set(a)];

// fifth method using includes

var array = [1, 1, 2, 3, 4, 4, 5];
var filtered = [];

for (var i = 0; i < array.length; i++) {
  if (!filtered.includes(array[i])) {
    filtered.push(array[i])
  }
}
console.log(filtered)