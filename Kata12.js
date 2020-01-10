const makeCase = function (input, cases) {
  //variables that may be useful throughout the function
    input = input.trim(); //string trim, just in case.
    let inputArray = input.split(""); //Array with each character a separate element
    let upperCaseInputArray = input.toUpperCase().split(""); //Array with each character a separate element, and all elements are uppercase
    let lowerCaseInputArray = input.toLowerCase().split(""); //Array with each character a separate element, and all elements are lowercase
    let caseMaker = {};
    let orderedCases = [];
    let properOrder = ["camel","pascal","snake","kebab","title","vowel","consonant","upper","lower"];
  //here we define all of the methods of the object.
    caseMaker.camel = function(inputArray) {
      for(index = 0; index < inputArray.length; index++) { //This replaces the lowercase values with uppercase values
        if(inputArray[index] === " ") {
          inputArray[index+1] = upperCaseInputArray[index+1];
        }
      }
      for(index = 0; index < inputArray.length; index++) { //This removes the spaces
        if(inputArray[index] === " ") {
          inputArray.splice(index,1);
        }
      }
      return inputArray;
    }
    //-------------------------------------------------------------------------------------------------------------
    caseMaker.pascal = function(inputArray) {
      inputArray[0] = upperCaseInputArray[0]; //Set the first letter as uppercase
      for(index = 0; index < inputArray.length; index++) {
        if(inputArray[index] === " ") {
          inputArray[index+1] = upperCaseInputArray[index+1];
        }
      }
      for(index = 0; index < inputArray.length; index++) {
        if(inputArray[index] === " ") {
          inputArray.splice(index,1);
        }
      }
      return inputArray;
    }
    //--------------------------------------------------------------------------------------------------------------
    caseMaker.snake = function(inputArray) {
      for(index = 0; index < inputArray.length; index++) { //This replaces the input string spaces with underscores
        if(inputArray[index] === " ") {
          inputArray[index] = "_";
        }
      }
      return inputArray;
    }
  //-------------------------------------------------------------------------------------------------------------
    caseMaker.kebab = function(inputArray) {
      for(index = 0; index < inputArray.length; index++) {
        if(inputArray[index] === " ") {
          inputArray[index] = "-";
        }
      }
      return inputArray;
    }
  //----------------------------------------------------------------------------------------------------------
    caseMaker.title = function(inputArray) {
      inputArray[0] = upperCaseInputArray[0]; //Set the first letter as uppercase
      for(index = 0; index < inputArray.length; index++) { //This replaces the lowercase values with uppercase values
        if(inputArray[index] === " ") {
          inputArray[index+1] = upperCaseInputArray[index+1];
        }
      }
      return inputArray;
    }
  //-------------------------------------------------------------------------------------------------------------
  caseMaker.vowel = function(inputArray) {
    for(index = 0; index < inputArray.length; index++) { 
      //This replaces the lowercase vowel values with uppercase values
      if((inputArray[index] === "a" || inputArray[index] === "e" 
      || inputArray[index] === "i" || inputArray[index] === "o" 
      || inputArray[index] === "u") 
      && (inputArray[index] !== " " && inputArray[index] !== "-" && inputArray[index] 
      !== "_" )){
        inputArray[index] = upperCaseInputArray[index];
      }
    }
    return inputArray;
  }
  //-------------------------------------------------------------------------------------------------------------
  caseMaker.consonant = function(inputArray) {
    for(index = 0; index < inputArray.length; index++) {
      if((inputArray[index] !== "a" && inputArray[index] 
      !== "e" && inputArray[index] !== "i" && inputArray[index] 
      !== "o" && inputArray[index] !== "u") && (inputArray[index] 
        !== " " && inputArray[index] !== "-" && inputArray[index] !== "_" )) {
        inputArray[index] = upperCaseInputArray[index];
      }
    }
    return inputArray;
  }
  //-------------------------------------------------------------------------------------------------------------
  caseMaker.upper = function(inputArray) {
    for(index = 0; index < inputArray.length; index++){
      if(inputArray[index] !== " " && 
      inputArray[index] !== "-" && inputArray[index] !== "_" ) {
      inputArray[index] = upperCaseInputArray[index];
      }
    }
    return inputArray;
  }
  //-------------------------------------------------------------------------------------------------------------
  caseMaker.lower = function(inputArray) {
    for(index = 0; index < inputArray.length; index++){
      if(inputArray[index] !== " " && inputArray[index] !== "-" && inputArray[index] !== "_" ) {
      inputArray[index] = lowerCaseInputArray[index];
      }
    }
    return inputArray;
  }
  //-------------------------------------------------------------------------------------------------------------
  //This searches through the cases array for the proper order items, 
  // if they exist (not = -1) then they are pushed into the orderedCases array. 
  // By the time the proper order array has been looped through all of the cases 
  // will have been checked and put into their proper position. 
  // Doing it this way saves me from having to use a bunch of if statements.
  if(Array.isArray(cases)) { 
    for (i = 0; i < properOrder.length; i++) {
      if(cases.indexOf(properOrder[i]) !== -1) {
        orderedCases.push(properOrder[i]);
      }
    }
    for (let i = 0; i < orderedCases.length; i++) {
      caseMaker[orderedCases[i]](inputArray);
    }
  } else {
    caseMaker[cases](inputArray); //Here we use the cases argument to call the proper method of our object, then we use the function input argument (modified to inputarray) as the argument of our method. This applies the correct style and returns the modified inputarray.
  }
  //console.log(orderedCases)
  return inputArray.join(""); //each method returns a modified inputArray, so we just display that as a string by joining it.
  }
  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ["upper", "kebab","camel"]));
  