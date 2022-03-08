function rot13(string) {
  const upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (upper.includes(string[index])) {
      let letter = string[index]
      let letterIndex = upper.indexOf(letter);
      newString += upper[(letterIndex + 13) % 26];
    } else if (lower.includes(string[index])) {
      let smallLetter = string[index];
      let smallLetterIndex = lower.indexOf(smallLetter);
      newString += lower[(smallLetterIndex + 13) % 26];
    } else {
        newString += string[index];
    }
  }
  
  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));