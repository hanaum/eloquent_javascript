function reverseArray(array) {
	var reversed = [];
	if (array.length === 0) {
		return reversed;
	}
	for (var i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	}
	return reversed;
}
function reverseArrayInPlace(array) {
	for (var i = 0, j = array.length - 1; i < array.length/2 && j > 0; i++, j--) {
		var tmp = array[i];
		array[i] = array[j];
		array[j] = tmp; 
	}
}

var array = [1,2,3,4,5,6];
console.log(reverseArray(array));
console.log(array);
reverseArrayInPlace(array);
console.log(array);