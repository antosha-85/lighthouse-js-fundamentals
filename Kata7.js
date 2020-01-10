let camelCase = function(input) {
  return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    if (index === 0) {
      return word.toLowerCase()
    } else {
      return word.toUpperCase()
    }
    
    // return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
};

console.log(camelCase("this is a string"));//thisIsAString


console.log(camelCase("loopy lighthouse")); //loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); //supercalifragalisticexpialidocious