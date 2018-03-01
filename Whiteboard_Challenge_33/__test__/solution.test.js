'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#sumExpo', () => {
    it('Should return null if no input is provided', () => {
      expect(solution.sumExpo()).toBeNull();
    });
    it('Should return null if inputs are not numbers', () => {
      expect(solution.sumExpo('tim')).toBeNull();
      expect(solution.sumExpo([])).toBeNull();
    });
    it('Should return the expected output', () => {
      expect(solution.sumExpo(2, 15)).toEqual(26);
      expect(solution.sumExpo(3, 2)).toEqual(9);
    });
    it('Should still return the expected output', () => {
      expect(solution.sumExpo(3,3)).not.toEqual(4);
    });
  });
});