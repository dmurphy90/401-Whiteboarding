'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('Sort Module', function(){
  describe('#highest', function(){
    it('should make sure the argument passed in is an array', function(){
      expect(solution.highest('puppies')).toBe(null);
    });
    it('should only contain numbers', function(){
      expect(solution.highest('blerp')).toBe(null);
      expect(solution.highest({})).toBe(null);
      expect(solution.highest(2)).toBe(null);
    });
    it('should weed out duplicates', function(){
      expect(solution.highest([1, 2, 3, 4, 5, 5])).toEqual({highest: 5, nextHighest: 4});
    });
    it('should contain a mininum of two numbers', function(){
      expect(solution.highest([1])).toBe(null);
      expect(solution.highest([])).toBe(null);
    });
  });
});