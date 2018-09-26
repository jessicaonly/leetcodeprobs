// let customer = {
//   name: 'Tom Smith',
//   speak: function(){
//     return "My name is " + this.name;
//   },

//   address: {
//     street: '123 Main St',
//     city: 'Pittsburgh',
//     state: 'PA'
//   }
// };

// function Person(name, street){
//   this.name = name;
//   this.street = street;

//   this.info = function(){
//     return 'My name is ' + this.name + ' and I live on ' + this.street;
//   }
// }

// let bobSmith = new Person ("Bob Smith", "234 main st");

// console.log(bobSmith.info())

// console.log('Bob is a person ' + (bobSmith instanceof Person))

// function changeName(person){
//   person.name = "Sue Smith";
// }

// changeName(bobSmith);

// console.log('Bob became ' + bobSmith.name)

// function Mammal(name){
//   this.name = name;
//   this.getInfo = function(){
//     return "The mammals name is " + this.name;
//   }
// }

// Mammal.prototype.sound = 'Grrr';

// Mammal.prototype.makeSound = function(){
//   return this.name + ' says ' + this.sound;
// }

// let grover = new Mammal('Grover');

// console.log(grover.makeSound())

// for(let prop in grover){
//   console.log(prop + ':' + grover[prop])
// }

// Array.prototype.inArray = function inArray(value){
//   for (let i = 0; i < this.length; i++){
//     if (this[i] === value){
//       return true;
//     }
//   }
// }

// let sampArray = [1,2,3,4,5]

// console.log('3 in array ' + sampArray.inArray(3))

// function SecretCode(){
//   let secretNum = 78;

//   this.guessNum = function(num){
//     if(num > 78){
//       return 'Lower'
//     }
//     else if (num < 78){
//       return 'Higher'
//     }
//     else {
//       return 'You guessed it!'
//     }
//   }
// }

// let secret = new SecretCode();

// console.log('Value of secretNum : ' + secret.secretNum)

// console.log('Is 70 the number ' + secret.guessNum(70))



// let address = {
//   street: 'No Street',
//   city: 'No City',
//   state: 'No State',

//   get getAddress(){
//     return this.street + ", " + this.city + ", " + this.state
//   },

//   set setAddress(theAddress){
//     let parts = theAddress.toString().split(', ');
//     this.street = parts[0] || '';
//     this.city = parts[1] || '';
//     this.state = parts[2] || ''
//   }
// }

// address.setAddress = '123 main St, Pittsburgh, PA'

// console.log(address.getAddress)


// function Coordinates(){
//   this.latitude = 0;
//   this.longitude = 0;
// }

// Object.__defineGetter__.call(Coordinates.prototype, 'getCoords', function(){
//   return 'Lat : ' + this.latitude + ' Long : ' + this.longitude
// })

// Object.__defineSetter__.call(Coordinates.prototype, 'setCoords', function(coords){
//   let parts = coords.toString().split(', ');
//   this.latitude = parts[0] || '';
//   this.longitude = parts[1] || ''
// })

// let testCoords = new Coordinates();

// testCoords.setCoords = '40.71, 71.00';

// console.log(testCoords.getCoords)

// var Circle = function(radius){
//   this._radius = radius;
// }

// Circle.prototype = {
//   set radius(radius) {this._radius = radius;},
//   get radius() {return this._radius},
//   get area() {return Math.PI * (this._radius * this._radius)}
// }

// let circ = new Circle(10);

// circ.radius = 15;

// console.log('circle with radius' + circ.radius + 'has an area of ' + circ.area.toFixed(2))


// function Animal(){
//   this.name = "Animal";

//   this.toString = function(){
//     return "My name is " + this.name;
//   };
// }

// function Canine(){
//   this.name = 'Canine';
// }

// function Wolf(){
//   this.name = 'Wolf';
// }

// Canine.prototype = new Animal();
// Wolf.prototype = new Canine();

// Canine.prototype.constructor = Canine;
// Wolf.prototype.constructor = Wolf;

// let arcticWolf = new Wolf();

// Animal.prototype.sound = 'Grrrr';
// Animal.prototype.getSound = function(){
//   return this.name + ' says ' + this.sound
// }

// function Rodent(){
//   this.name = "rodent";
// }

// function Rat(){
//   this.name = "rat"
// }

// Rodent.prototype = new Animal();
// Rat.prototype = Rodent.prototype;
// Rodent.prototype.constructor = Rodent;
// Rat.prototype.constructor = Rat;

// let caneRat = new Rat();

// console.log(caneRat.toString())

// function extend(Child, Parent){
//   let Temp = function(){};

//   Temp.prototype = Parent.prototype;

//   Child.prototype = new Temp();

//   Child.prototype.constructor = Child;
// }

// function Deer(){
//   this.name = "Deer";
//   this.sound = "snort"
// }

// extend(Deer, Animal)

// let elk = new Deer;

// console.log(elk.getSound())

// function Vehicle(name){
//   this.name = "Vehicle";
// }

// Vehicle.prototype = {
//   drive: function(){
//     return this.name + 'drives forward'
//   },
//   stop: function(){
//     return this.name + 'stops'
//   }
// }

// function Truck(name){
//   this.name = name;
// }

// Truck.prototype = new Vehicle();
// Truck.prototype.constructor = Truck;

// Truck.prototype.drive = function() {
//   let driveMsg = Vehicle.prototype.drive.apply(this);

//   return driveMsg += ' through a field'
// }

// let jeep = new Truck('Jeep');

// console.log(jeep.drive())
// console.log(jeep.stop())

// let addStuff = {
//   sum(num1, num2){
//     return num1 + num2;
//   }
// }

// console.log('1 + 2 = ' + addStuff.sum(1,2))

// class Point {
//   constructor(xPos, yPos){
//     this.xPos = xPos;
//     this.yPos = yPos
//   }

//   getPos(){
//     return 'X: ' + this.xPos + 'Y' + this.yPos
//   }
// }

// let point = new Point(100,200);

// console.log(point.getPos())

// class Animal{
//   constructor(name){
//     this.name = name;
//   }
//   toString(){
//     return 'Animal is name ' + this.name;
//   }
//   static getAnimal(){
//     return new Animal('No name')
//   }
// }

// class Dog extends Animal{
//   constructor(name, owner){
//     super(name);
//     this.owner = owner
//   }
//   toString(){
//     return super.toString() + 'dog is named ' + this.name;
//   }
// }

// let rover = new Dog ('Rover', 'Paul');

// console.log(rover.name + ' is owned by ' + rover.owner)

// console.log(rover.toString())


// //SINGLETON

// function Hero(name) {
//  if (typeof Hero.instance === 'object'){
//    return Hero.instance;
//  }
// this.name = name;
// Hero.instance = this;
// return this;
// }

// let derekHero = Hero('Derek');
// console.log('Our hero is' + derekHero.name)

// function Sword(desc){
//   this.weaponType = 'sword';
//   this.metal = desc.metal || 'Steel';
//   this.style = desc.style || 'Longsword';
//   this.hasMagic = desc.hasMagic || false
// }

// function Bow(desc){
//   this.weaponType = 'Bow';
//   this.material = desc.metal || 'Wood';
//   this.style = desc.style || 'Longbow';
//   this.hasMagic = desc.hasMagic || false
// }

// function WeaponFactory(){};

// WeaponFactory.prototype.makeWeapon = function(desc){
//   let weaponClass = null;

//   if (desc.weaponType === 'Sword'){
//     weaponClass = 'Sword';
//   }
//   else if (desc.weaponType === 'Bow'){
//     weaponClass = Bow;
//   }else {
//     return false;
//   }
//   return new weaponClass(desc);
// }

// let myWeaponFact = new WeaponFactory();

// let bladeFist = myWeaponFact.makeWeapon({
//   weaponType: 'Sword',
//   metal: 'Dark Iron',
//   style: 'Scythe',
//   hasMagic: true
// });

// function Pizza(price){
//   this.price = price || 10;
// }

// Pizza.prototype.getPrice = function(){
//   return this.price;
// }

// function ExtraCheese(pizza){
//   let prevPrice = pizza.price;

//   pizza.price = prevPrice + 1;
// }

// let myPizza = new Pizza(10);
// ExtraCheese(myPizza);
// console.log('pizza price ' + myPizza.price)

let Observable = function(){
  this.subscribers = [];
}

Observable.prototype = {
  subscribe: function(subscriber){
    this.subscribers.push(subscriber);
  },
  unsubscribe: function(unsubscriber){
    for(let i = 0; i < this.subscribers.length; i++){
      if(this.subscribers[i] === unsubscriber){
        this.subscribers.splice(i, 1);

        return unsubscriber.name;
      }
    }
  },

  publish: function(data){
    for (let i = 0; i < this.subscribers.length; i++){
      this.subscribers[i].receiveData(data);
    }
  }
}

let OrganFanny = {
  name: 'Organ Fanny',
  receiveData: function(data){
    console.log(this.name + 'received your info' + data)
  }
}

let BoldmanYaks = {
  name: 'BoldmanYaks',
  receiveData: function(data){
    console.log(this.name + 'received your info' + data)
  }
}

observable = new Observable();
observable.subscribe(OrganFanny)
observable.subscribe(BoldmanYaks)

observable.publish('IBM at 145')

console.log(observable.unsubscribe(OrganFanny) + 'unsubscribed')