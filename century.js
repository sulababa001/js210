function century(year) {
  let fraction = (year % 100) * 1 / 100;
  let cent = (year / 100) - ((year % 100) * 1 /100) + 1;
  if (fraction === 0) {
    cent -= 1;
  }
  let centString = cent.toString();
  return centString + prefix(centString);
}
function prefix(string) {
  let stringLength = string.length;
  let last = string[stringLength -1];
  switch (true) {
    case (last === '1' && string[string.length - 2] !== '1'):
      return 'st';
      break;
    case (last === '2' && string[string.length - 2] !== '1'):
      return 'nd';
      break;
    case (last === '3' && string[string.length - 2] !== '1'):
      return 'rd';
      break;
    default:
      return 'th';
      break;
  }
};


