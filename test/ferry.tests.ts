import assert from 'assert';
import { Car } from '../src/car';
import { Ferry } from '../src/ferry';

describe('Ferry', () => {
    it('should board a car if within limits', () => {
      const ferry = new Ferry(2, 10);
      const car = new Car('red', 4);
      const result = ferry.board(car);
      assert.equal(result, 'accepted');
      assert.equal(ferry.carCount, 1);
      assert.equal(ferry.peopleCount, 4);
    });
  
    it('should reject a car if limits exceeded', () => {
      const ferry = new Ferry(1, 4);
      const car1 = new Car('red', 4);
      const car2 = new Car('blue', 4);
      ferry.board(car1);
      const result = ferry.board(car2);
      assert.equal(result, 'rejected');
      assert.equal(ferry.carCount, 1);
      assert.equal(ferry.peopleCount, 4);
    });
  
    it('should correctly handle leaving cars', () => {
      const ferry = new Ferry(2, 10);
      const car = new Car('red', 4);
      ferry.board(car);
      const result = ferry.leave(car);
      assert.strictEqual(result,true);
      assert.equal(ferry.carCount, 0);
      assert.equal(ferry.peopleCount, 0);
    });
  
    it('should correctly count cars by colour', () => {
      const ferry = new Ferry(3, 15);
      const car1 = new Car('red', 4);
      const car2 = new Car('blue', 4);
      const car3 = new Car('red', 2);
      ferry.board(car1);
      ferry.board(car2);
      ferry.board(car3);
      const redCount = ferry.getCarCountByColor('red');
      const blueCount = ferry.getCarCountByColor('blue');
      assert.equal(redCount, 2);
      assert.equal(blueCount, 1);
    });
  
    it('should give half price after three trips on the same ferry', () => {
      const ferry = new Ferry(3, 15);
      const car = new Car('red', 4);
      ferry.board(car);
      ferry.leave(car);
      ferry.board(car);
      ferry.leave(car);
      ferry.board(car);
      ferry.leave(car);
      const result = ferry.board(car);
      assert.equal(result, 'half price!');
    });
  
    it('should give a free trip after 7 trips on any ferry', () => {
      const ferry = new Ferry(3, 15);
      const car = new Car('red', 4);
      for (let i = 0; i < 6; i++) {
        ferry.board(car);
        ferry.leave(car);
      }
      const result = ferry.board(car);
      assert.equal(result, 'you go free!');
    });
  });