class Vehicle {
	constructor(numberOfPassengers,speed,wheel) {
		this.passengers = numberOfPassengers;
		this.maximumSpeed = speed;
		this.antalHjul = wheel;

	}
	howFast(){
		  console.log(`itsSpeed = ${this.maximumSpeed}`);
	}
}
class Bicycle extends Vehicle {
	constructor(speed) {
		super(1,speed,2);
	}
	// ärver passengers från Vehicle
}
class Boat extends Vehicle {
	constructor(numberOfPassengers,speed,deep) {
		super(numberOfPassengers,speed,0);
  	this.howDeep = deep;
	}

}

//let motorBoat = new Boat();

class Car extends Vehicle {
	constructor(numberOfPassengers,speed) {
		super(numberOfPassengers,speed,4);
	}
	// ärver passengers från Vehicle
}
let v = new Vehicle(1,23,4)
let b = new Bicycle(13)
v.howFast()
b.howFast()
b
let boat = new Boat(30,34,56)
let car = new Car(4,45)

