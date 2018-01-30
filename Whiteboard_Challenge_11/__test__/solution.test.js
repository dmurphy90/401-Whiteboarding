'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('Solutions Module', function() {
  describe('#findMissing', () => {
    it('Should accept a valid input of an array', () => {
      expect(solution.findMissing()).toBeNull;
      expect(solution.findMissing('dog')).toBeNull;
      expect(solution.findMissing(6)).toBeNull;
    });
    it('Should verify that the array is full of numbers', () => {
      expect(solution.findMissing([1, 2, 3, 4, 'dog', 5, 6, 7])).toBeNull;
      expect(solution.findMissing([1, 2, 3, 4, true, 5, 6])).toBeNull;
    });
    it('Should find the correct missing number and return it as an array', () => {
      expect(solution.findMissing([1, 2, 3, 4, 6, 7])).toEqual([5]);
    });
  });
});