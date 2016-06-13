function chessBoard(size) {
  var str = '';
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      str += ' ';
      for (var j = 1; j < size; j++) {
        if (j % 2 === 0) {
          str += ' ';
        } else {
          str += '#';
        }
      }
    } else {
      str += '#';
      for (var j = 1; j < size; j++) {
        if (j % 2 !== 0) {
          str += ' ';
        } else {
          str += '#';
        }
      }
    }
    str += '\n';
  }
  return str;
}

// test cases
console.log(chessBoard(20));
console.log(chessBoard(0));