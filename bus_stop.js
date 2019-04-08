const BusStop =function(name){
  this.name = name;
  this.queue = [];
  // this.property
};

BusStop.prototype.joinQueue = function (person) {
  this.queue.push(person)
};

BusStop.prototype.leaveQueue = function () {
  this.queue.shift();
};

// methods are added to the prototype of the class
module.exports = BusStop;
