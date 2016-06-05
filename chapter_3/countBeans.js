function countBs(input_string) {
  if (typeof input_string !== 'string') {
    return -1;
  }

  var CAPITAL_B = 'B';
  var count = 0;
  for (var i = 0; i < input_string.length; i++) {
    if (input_string.charAt(i) === CAPITAL_B) {
      count ++;
    }
  }
  return count;
}

function countChar(input_string, character) {
  if (typeof input_string !== 'string' || typeof character !== 'string') {
    return -1;
  }

  var count = 0;
  for (var i = 0; i < input_string.length; i++) {
    if (input_string.charAt(i) === character) {
      count ++;
    }
  }
  return count;
}

console.log(countBs('BEEsBesbbbbbBeees'));
console.log(countBs(1));
console.log(countChar("kakkerlak", "k"));
