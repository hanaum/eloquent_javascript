function deepEqual(obj1, obj2) {
  console.log(obj1);
  console.log(obj2);
  if (typeof obj1 !== typeof obj2) {
    return false;
  }
  if (typeof obj1 !== 'object') {
    return obj1 === obj2;
  }
  var obj1PropertyNames = Object.getOwnPropertyNames(obj1);
  if (obj1PropertyNames.length !== Object.getOwnPropertyNames(obj2).length) {
    console.log('here');
    return false;
  }
  if (obj1PropertyNames.length === 0) {
    return true;
  }

  for (var prop in obj1PropertyNames) {
    if (obj2.hasOwnProperty(prop)) {
      if (!deepEqual(obj1[prop], obj2[prop])) {
            console.log('here1');
        return false;
      }
    } else {
      console.log(prop);
          console.log('here2');

      return false;
    }
  }

  return true;
}

var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}

var obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}

console.log(deepEqual(obj1, obj2));