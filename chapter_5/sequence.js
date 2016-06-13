function logFive(sequence) {
	var count = 0;
	for (var i = 0; i < 5; i++) {
		console.log(sequence[i]);
		count++;
		if (count === sequence.length) {
			break;
		}
	}
}

function ArraySeq(array) {
	this.array = array;
	return this.array;
}

function RangeSeq(from, to) {
	var array = [];
	for (var i = from; i < to; i++) {
		array.push(i);
	}
	return array;
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
