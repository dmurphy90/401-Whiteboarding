'use strict';

const SLL = require('../lib/sll.js');
const solution = require('../lib/solution.js');
require('jest');

describe('Solution Module', function() {
  describe('#intersect', () => {
    it('should return an sll with the intersected values', () => {
      let test = new SLL;
      let test2 = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      test.insertEnd(3);
      test2.insertEnd(1);
      test2.insertEnd(3);
      expect(solution.intersect(test, test2)).toEqual(test2);
    });

    it('arguments should be objects', () => {
      expect(solution.intersect(123, 345)).toBeNull();
      
    });
    it('should return an empty SLL if no intersections', () => {
      let test = new SLL;
      let test2 = new SLL;
      test.insertEnd(1);
      test.insertEnd(2);
      test.insertEnd(3);
      test2.insertEnd(4);
      test2.insertEnd(5);
      test2.insertEnd(6);
      expect(solution.intersect(test, test2)).toEqual(new SLL);
    });
  });
});