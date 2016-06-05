function isEven(num) {
  if (num < 0) {
    num *= -1;
  }
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(57));
console.log(isEven(-1));
