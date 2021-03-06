function Vector(x, y) {
	this.x = x;
	this.y = y;
	this.length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}

Vector.prototype.plus = function(vector) {
	var summedX = this.x + vector.x;
	var summedY = this.y + vector.y;
	return new Vector(summedX, summedY);
}

Vector.prototype.minus = function(vector) {
	var summedX = this.x - vector.x;
	var summedY = this.y - vector.y;
	return new Vector(summedX, summedY);
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);