'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('Solution Module', function() {
  describe('#evaluate', () => {
    it('should make sure an argument is provided', () => {
      expect(solution.evaluate()).toBeNull();
    });
    it('should make sure the argument provided is an object', () => {
      expect(solution.evaluate('dog')).toBeNull();
      expect(solution.evaluate(9)).toBeNull();
    });
    it('should return the correct boolean value', () => {
      let tester = {val: 1, next:{val: 2, next:{val:3, next: null}}};
      expect(solution.evaluate(tester)).toEqual(false);
    });
  }); 
});