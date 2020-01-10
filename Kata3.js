numberOfVowels = function (data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numberOfVowels = 0;
  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j] === vowels[i]) {
        numberOfVowels++
      }
    } 
  } return numberOfVowels;
}
