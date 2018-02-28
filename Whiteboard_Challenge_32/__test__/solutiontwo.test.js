'use strict';

const solution = require('../lib/solutiontwo');
require('jest');

describe('Solution Module', function() {
  describe('Recursive', () => {
    it('Should verify that an input is provided', () => {
      expect(solution()).toBeNull();
    });
    it('Should verify that the input provided is a number', () => {
      expect(solution('tim')).toBeNull();
    });
    it('Should return the expected output', () => {
      expect(solution(4)).toEqual(3);
      expect(solution(1)).toEqual(1);
      expect(solution(10)).toEqual(55);
    });
    it('Should still return expected output', () => {
      expect(solution(3)).not.toEqual(3);
    });
  });
});