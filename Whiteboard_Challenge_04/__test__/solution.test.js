'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('Soltuion Module', function(){
  describe('#matchUp', function(){
    it('should check that two arguments are used', function(){
      expect(solution.matchUp()).toBe(null);
    });
    it('should check to make sure that the arguments are arrays', function(){
      expect(solution.matchUp({})).toBe(null);
      expect(solution.matchUp('dog', 'frog')).toBe(null);
      expect(solution.matchUp(7, 5)).toBe(null);
    });
    it('should make sure that the tests do have shared elements', function(){
      expect(solution.matchUp([1, 3, 9, 5],[2, 4, 6, 8])).toEqual([]);
    });
    it('should test data types besides just strings', function(){
      expect(solution.matchUp([5, 7, 4, 9],[3, 7, 1, 4])).toEqual([7, 4]);
    });
  });
});