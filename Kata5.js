const urlEncode = function(text) {
  let string = '';
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] == ' ') {
      string += '%20';
    } else {
    string += text[i]
  } 
  } return string;
}

// const urlEncode = function(text) {
//   let str = text.trim();
//   str = str.replace(/\s/g, "%20");
//   return str
// } 



console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
