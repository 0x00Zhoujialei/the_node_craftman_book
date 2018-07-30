var myCar = {};

myCar.honk = function () {
	console.log('honk honk');
};

myCar.drive = function () {
	console.log('vrooom...');
};

myCar.honk();
myCar.drive();

// examine all possible ways of creating objects
var makeCar = function () {
	var newCar = {};
	newCar.honk = function () {
		console.log('honk honk');
	};
	return newCar;
};

var myCar1 = makeCar();
var myCar2 = makeCar();
var myCar3 = makeCar();

// constructors
var Car = function () {
	this.honk = function () {
		console.log('honk honk');
	};
};

var myCar4 = new Car();
var myCar5 = new Car();

console.log(myCar4.constructor);
console.log(myCar5.constructor);

// prototype
var pCar = function () {};

pCar.prototype.honk = function () {
	console.log('honk honk');
};

var myCar6 = new pCar();
var myCar7 = new pCar();

myCar6.honk();
myCar7.honk();

pCar.prototype.honk = function () {
	console.log('meep meep');
};

myCar6.honk();
myCar7.honk();

function inheirt(child, parent) {
	var F = function () {};
	F.prototype = parent.prototype;
	child.prototype = new F();
	child.prototype.constructor = child;
}

var Vehicle = function () {};
Vehicle.prototype.drive = function () {
	console.log('vrooom...');
};
var Car = function () {};
Car.prototype.speed = function () {
	console.log('100km/h');
};

inheirt(Car, Vehicle);

var tCar = new Car();
console.log(tCar instanceof Vehicle);
tCar.drive();