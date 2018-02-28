'use strict';

const solution = require('../lib/solutionone');
require('jest');

describe('Solution Module', function() {
  describe('Non-Recursive', () => {
    it('Should verify that an input is provided', () => {
      expect(solution.fibo()).toBeNull();
    });
    it('Should verify that the input provided is a number', () => {
      expect(solution.fibo('tim')).toBeNull();
    });
    it('Should return the expected output', () => {
      expect(solution.fibo(4)).toEqual(3);
      expect(solution.fibo(1)).toEqual(1);
      expect(solution.fibo(10)).toEqual(55);
    });
    it('Should still return expected output', () => {
      expect(solution.fibo(3)).not.toEqual(3);
    });
  });
});