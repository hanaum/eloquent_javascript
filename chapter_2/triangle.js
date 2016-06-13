function triangle(num) {
  var str = '';
  if (num === 0) {
    return str;
  }
  for (var i = 1; i < num + 1; i++) {
    for (var j = 1; j < i + 1; j++) {
      str += '#';
    }
    str += '\n';
  }
  return str;
}
console.log(triangle(0));
console.log(triangle(14));