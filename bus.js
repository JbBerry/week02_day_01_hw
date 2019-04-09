const Bus =function(routeNumber, destination, passengers, distanceTravelled = 0){
  this.routeNumber = routeNumber;
  this.destination = destination;
  this.passengers = [];
  this.distanceTravelled = distanceTravelled;
  // this.property
};

Bus.prototype.drive = function () {
  this.distanceTravelled += 10;
};

Bus.prototype.passengerCount = function () {
  return this.passengers.length;
};

Bus.prototype.pickUpPassenger = function (person) {
  this.passengers.push(person)
};

Bus.prototype.dropOffPassenger = function () {
  this.passengers.shift();
};

Bus.prototype.emptyBus = function () {
  for (let i = this.passengers.length-1; i >= 0; i--) {
   this.dropOffPassenger();
 }
};

Bus.prototype.pickUpFromStop = function (busStop) {
  this.pickUpPassenger(busStop.leaveQueue());
};

Bus.prototype.pickUpAllFromStop = function (busStop) {
  const counter = busStop.queue.length
  for (var i = 0; i < counter; i++) {
    this.pickUpFromStop(busStop)
  }
};
// methods are added to the prototype of the class
module.exports = Bus;
