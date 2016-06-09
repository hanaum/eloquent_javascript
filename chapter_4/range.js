function range(start, end) {
	if (start === end) {
		return [start];
	} else if (start < end) {
		return increasingRange(start, end);
	} else {
		return decreasingRange(start, end);
	}
}

function increasingRange(start, end) {
	var range = [];
	for (var i = start; i <= end; i++) {
		range.push(i);
	}
	return range;
}

function decreasingRange(start, end) {
	var range = [];
	for (var i = start; i >= end; i--) {
		range.push(i);
	}
	return range;
}

console.log(range(-10, 10));
console.log(range(10, 1));