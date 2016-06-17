function logFive(sequence) {
	var iterator = sequence.iterator();
	var count = 0;
	while (iterator.hasNext() && count < 5) {
		console.log(iterator.next());
		count++;
	}
}

function Iterator(array) {
	this.array = array;
	this.counter = -1;
}

Iterator.prototype.hasNext = function() {
	return this.counter < this.array.length - 1;
}

Iterator.prototype.next = function() {
	if (this.hasNext()) {
		this.counter++;
		return this.array[this.counter];
	} else {
		throw "No more elements";
	}
}

function ArraySeq(array) {
	this.array = array;
}

ArraySeq.prototype.iterator = function() {
	return new Iterator(this.array);
};

function RangeSeq(from, to) {
	this.array = [];
	for (var i = from; i < to; i++) {
		this.array.push(i);
	}
}

RangeSeq.prototype.iterator = function() {
	return new Iterator(this.array);
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
