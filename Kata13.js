// INPUT:
const urlDecode = (text) => {

let url = text;
let jsObject = {};
let keys = [];
let values = [];

const searchParams = new URLSearchParams(url);

for(let pair of searchParams.entries()){
keys.push(pair[0]);
values.push(pair[1]);

};

for(let i = 0; i < keys.length; i++){
key = keys[i];
value = values[i];
jsObject[key] = value;
};

return jsObject;

}

console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// OUTPUT:
// {"duck":"rubber"}
// {"bootcamp":"Lighthouse Labs"}
// {"city":"Vancouver","weather":"lots of rain"}
// lots of rain