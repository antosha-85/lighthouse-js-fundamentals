// let sumLargestNumbers = function(data) {
//   if(data.length === 2) {
//     return data[0] + data[1];
//   } else if (data.length > 2) {
//     for (var i = 0; i < data.length - 1; i++) {
//       var minValue = data[i];
          
//       for (var j = i + 1; j < data.length; j++) {
//         if (data[j] < minValue) {
//           minValue = data[j];
//           var swap = data[i];
//           data[i] = minValue;
//           data[j] = swap;
//         }
//       }
//     }
    
//     return (data[data.length - 1] + data[data.length - 2])
//     } else {
//     alert('Your array is very short!')
//   }
// };

let sumLargestNumbers = function(data) {
  data.sort() 
  return data;
}