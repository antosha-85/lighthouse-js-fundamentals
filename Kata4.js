instructorWithLongestName = function (instructors) {
  let max = instructors[0].name.length;
  for (let i = 0; i < instructors.length; i++) {    
      if (instructors[i].name.length > max) {
      max = instructors[i]; // I'm not sure about this line because how can instructors[i].name.length be compared with instructors[i]. Maybe created a new variable?
      } 
    } return max;
  } 


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));