'use strict';

const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  let testStr = 'cat dog abe zazzle frog tree';

  describe('#highestScore', () => {
    it('Should return the highest scoring word in the string', () => {
      expect(solution.highestScore(testStr)).toEqual('zazzle');
    });
    it('Should not return anything when given an empty string', () => {
      expect(solution.highestScore('')).toEqual('');
    });
  });
});