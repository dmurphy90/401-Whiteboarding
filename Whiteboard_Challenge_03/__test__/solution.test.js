'use strict';

const solution = require('../solution.js');
require('jest')

describe('Count Module', function(){
  describe('#headCount', function(){
    it('should make sure that an argument is passed in', function(){
      expect(solution.headCount()).toBe(null);
    });
    it('should make sure input is an object', function(){
      expect(solution.headCount(1)).toBe(null);
      expect(solution.headCount('dog')).toBe(null);
    });
    it('should make sure the passenger key has an integer value', function() {
      expect(solution.headCount({passengers: 7, next:{passengers: 'turtle', next: null}})).toEqual(7);
    });
    it('should make sure the result of each passenger count is correct', function(){
      expect(solution.headCount({passengers: 6, next: null})).toEqual(6)
    });
  });
});