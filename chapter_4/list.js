 function Node(value) {
  this.value = value;
  this.rest = null;
}

function arrayToList(array) {
  if (!Array.isArray(array) || array.length <= 0) {
    return null;
  }

  var head = new Node(array[0]);

  var currentNode = head;
  for (var i = 1; i < array.length; i++) {
    var nextNode = new Node(array[i])
    currentNode.rest = nextNode;
    currentNode = nextNode;
  } 
  return head;
}

function listToArray(list) {
  var array = [];
  while (list !== null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list) {
  if (!element) {
    return null;
  }
  element.rest = list;
  return element;
}

function nth(n, list) {
  if (n < 0 || !list) {
    return;
  }

  var counter = 0;
  while (list.rest !== null && counter < n) {
    counter++;
    list = list.rest;
  }

  if (counter !== n) {
    return;
  }
  return list.value;
}

// running the functions
var list = {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}};
var element = {value: 1, rest: null};
console.log(arrayToList([1,2,3]));
console.log(listToArray(exList));
console.log(prepend(element, list));
console.log(nth(2, list));