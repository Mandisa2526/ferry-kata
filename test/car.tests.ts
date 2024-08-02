import assert from "assert";
import {Car} from '../src/car';

describe('Car', function() {
    it('should create a car with specified colour and passenger count', () => {
        const car = new Car('red', 4);
        assert.equal(car.colour, 'red');
        assert.equal(car.passengerCount, 4);
      });
    
      it('should increment trip count', () => {
        const car = new Car('blue', 2);
        assert.equal(car.getTripCount(), 0);
        car.incrementTripCount();
        assert.equal(car.getTripCount(), 1);
      });
})