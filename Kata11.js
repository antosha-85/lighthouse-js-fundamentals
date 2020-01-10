// const organizeInstructors = function(instructors) {
//   let obj = {};
//   for (let i = 0; i < instructors.length; i++) {
//     if(instructors[i].course === 'iOS') {
//       obj['iOS'] = [instructors[i].name];
         
//     }
//     if(instructors[i].course === 'Web') {
//       obj['Web'] = [instructors[i].name];
      
//     }
//     if(instructors[i].course === 'Blockchain') {
//       obj['Blockchain'] = [instructors[i].name];
      
//     }
//   } return obj;
// };


const organizeInstructors = function(instructors) {
  var finalObject = {};
  for (var i = 0; i < instructors.length; i++){
    var course = instructors[i].course;
    if (course in finalObject){
      finalObject[course].push(instructors[i].name);
    }
    else {
      finalObject[course] = [instructors[i].name];
    }   
  }
  return finalObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
])); 
//  {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

