function range(start, end, step) {
  if (start === end) {
    return [start];
  } else if (start < end) {
    return increasingRange(start, end, step);
  } else {
    return decreasingRange(start, end, step);
  }
}

function increasingRange(start, end, step = 1) {
  var range = [];
  if (step < 0) {
    return [];
  }
  for (var i = start; i <= end; i += step) {
    range.push(i);
  }
  return range;
}

function decreasingRange(start, end, step = -1) {
  var range = [];
  if (step > 0) {
    return [];
  }
  for (var i = start; i >= end; i += step) {
    range.push(i);
  }
  return range;
}
//------------------------------------------

function sum(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce(function(total, num) {
    return total + num;
  });
}

console.log(range(10, -10, -3));
console.log(range(-10, 10, 2));
console.log(sum(range(1, 10)));
console.log(sum([]));