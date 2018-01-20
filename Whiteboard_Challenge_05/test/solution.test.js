'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('Solution Module', () => {
  describe('#findMiddle', () => {
    it('should make sure an argument is provided', () => {
      expect(solution.findMiddle()).toBe(null);
    });
    it('should make sure the argument passed in is valid as an object', () => {
      expect(solution.findMiddle(7)).toBe(null);
      expect(solution.findMiddle('dog')).toBe(null);
    });
    it('should make sure that it is valid as a linked list', () => {
      expect(solution.findMiddle({value: 'turtle', next: null})).toEqual({value: 'turtle', next: null});
    });
  });
});