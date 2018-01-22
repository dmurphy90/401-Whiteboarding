'use strict';

const solution = require('../lib/solution.js');

describe('Loop Module', () => {
  describe('#loop', () => {
    it('should make sure that the input is greater than zero', () => {
      expect(solution.loop(0)).toBeNull();
    });
    it('should make sure that the input is a number', () => {
      expect(solution.loop([])).toBeNull();
      expect(solution.loop('dog')).toBeNull();
      expect(solution.loop({})).toBeNull();
    });
    it('should verify the callback was run the correct amount of times', () => {
      expect(solution.loop(7)).toEqual(7);
      expect(solution.loop(13)).toEqual(13);
    });
  });
});