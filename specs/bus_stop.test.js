const Bus = require('../bus');
const Person = require('../passenger');
const BusStop = require('../bus_stop');

describe('bus route', () => {
  let number22;
  let ben;
  let pawel;
  let hamish;
  let castleTerrace;

  beforeEach(() => {
    number22 = new Bus ('22', 'Ocean Terminal');
    ben = new Person ('Ben', 25);
    pawel = new Person ('Pawel', 28);
    hamish = new Person ('Hamish', 35);
    castleTerrace = new BusStop ('Castle Terrace')

  });
  test('A bus should have a route', () => {
    expect(number22.routeNumber).toBe('22');
  });

  test('A bus should have a destination', () => {
    expect(number22.destination).toBe('Ocean Terminal');
  });

  test('A bus should begin having travelled no distance', () => {
    expect(number22.distanceTravelled).toBe(0);
  });

  test('A bus should be able to travel a distance', () => {
    number22.drive();
    expect(number22.distanceTravelled).toBe(10);
  });

  test('A Person should have a name', () => {
    expect(ben.name).toBe('Ben');
  });

  test('A Person should have an age', () => {
    expect(ben.age).toBe(25);
  });

  test('A Bus stop should have a name', () => {
    expect(castleTerrace.name).toBe('Castle Terrace');
  });

  test('A bus should start with no passengers', () => {
    expect(number22.passengers).toEqual([]);
  });

  test('A bus should be able to pick up passengers', () => {
    number22.pickUpPassenger(ben);
    number22.pickUpPassenger(pawel);
    expect(number22.passengerCount()).toBe(2);
  });

  test('A bus should be able to drop off passengers', () => {
    number22.pickUpPassenger(ben);
    number22.pickUpPassenger(pawel);
    number22.dropOffPassenger();
    expect(number22.passengerCount()).toBe(1);
  });

  test('A bus should be able to drop off all passengers', () => {
    number22.pickUpPassenger(ben);
    number22.pickUpPassenger(pawel);
    number22.emptyBus();
    expect(number22.passengerCount()).toBe(0);
  });

  test('A bus stop should start with no queue', () => {
    expect(castleTerrace.queue).toEqual([]);
  });

  test('people should be able to join the bus stop queue', () => {
    castleTerrace.joinQueue(ben);
    castleTerrace.joinQueue(pawel);
    expect(castleTerrace.queue.length).toBe(2);
  });

  test('people should be able to leave the bus stop queue', () => {
    castleTerrace.joinQueue(ben);
    castleTerrace.joinQueue(pawel);
    castleTerrace.leaveQueue();
    expect(castleTerrace.queue.length).toBe(1);
  });

  test('people should be able to get on the bus from the bus stop queue', () => {
    castleTerrace.joinQueue(ben);
    number22.pickUpFromStop(castleTerrace);
    expect(castleTerrace.queue.length).toBe(0);
    expect(number22.passengerCount()).toBe(1);
  });

  test('all people should be able to get on the bus from the bus stop queue', () => {
    castleTerrace.joinQueue(ben);
    castleTerrace.joinQueue(pawel);
    castleTerrace.joinQueue(hamish);
    number22.pickUpAllFromStop(castleTerrace);
    expect(castleTerrace.queue.length).toBe(0);
    expect(number22.passengerCount()).toBe(3);
  });

});
