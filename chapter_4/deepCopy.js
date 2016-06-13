function deepEqual(obj1, obj2) {
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  if (typeof obj1 !== 'object') {
    return obj1 === obj2;
  }
  var obj1PropertyNames = Object.getOwnPropertyNames(obj1);
  if (obj1PropertyNames.length !== Object.getOwnPropertyNames(obj2).length) {
    return false;
  }
  if (obj1PropertyNames.length === 0) {
    return true;
  }

  for (var i = 0; i < obj1PropertyNames.length; i++) {
    var prop = obj1PropertyNames[i];
    if (obj2.hasOwnProperty(prop)) {
      if (!deepEqual(obj1[prop], obj2[prop])) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

// test cases
var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 0
  }
}

var obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 0
  }
}

console.log(deepEqual(obj1, obj2));