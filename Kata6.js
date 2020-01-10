// let repeatNumbers = function(data) {
//   let string = '';
//   if (data.length === 1) {
//     for (let i = 0; i < data[0][1]; i ++) {
//       string += String(data[0][0])
//     }
//   } else if (data.length === 2) {
//     for (let i = 0; i < data[0][1]; i ++) {
//       string += String(data[0][0])
//     } string += ', ';
//     for (let j = 0; j < data[1][1]; j ++) {
//       string += String(data[1][0])
//     }
//   } else if (data.length === 3) {
//     for (let i = 0; i < data[0][1]; i ++) {
//       string += String(data[0][0])
//     } string += ', ';
//     for (let j = 0; j < data[1][1]; j ++) {
//       string += String(data[1][0])
//     } string += ', ';
//     for (let k = 0; k < data[2][1]; k ++) {
//       string += String(data[2][0])
//     }
//   } return string// Put your solution here
// } 

let repeatNumbers = function(data) {
  // Put your solution here
  let string = '';
  for (let i = 0; i < data.length; i++){
  for (let j = 1; j <= data[i][1]; j++) {
  string += data[i][0];
  }
  if(i < data.length - 1) {
  string += ", ";
  }
  }
  return string;
  };

  
  
console.log(repeatNumbers([[1, 10]])); //1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); //11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]])); //10101010, 343434343434, 9292



