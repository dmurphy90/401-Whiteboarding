'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  
  let testArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  let floatArr = [
    [1.1, 2.2, 3.3],
    [4.4, 5.5, 6.6],
    [7.7, 8.8, 9.9],
  ];

  describe('#flipNinety', () => {
    it('Should return an array that has been flipped ninety degrees', () => {
      expect(solution.flipNinety(testArr)).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
    });
    it('Should still run when provided floating point integers', () => {
      expect(solution.flipNinety(floatArr)).toEqual([[1.1, 4.4, 7.7], [2.2, 5.5, 8.8], [3.3, 6.6, 9.9]]);
    });
    it('Should return null if provided an empty array', () => {
      expect(solution.flipNinety([])).toBeNull();
    });
    it('Should return null if provided an input that is not an array', () => {
      expect(solution.flipNinety('tim')).toBeNull();
    })
  });
});