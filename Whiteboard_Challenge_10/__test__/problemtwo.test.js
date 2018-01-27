'use strict';

const problemTwo = require('../lib/problemtwo.js');
require('jest');

describe('Problem Two Module', function() {
  describe('#binarySearch null case ', () => {
    it('Should check that a valid input is provided', () => {
      expect(problemTwo.binarySearch()).toBeNull();
      expect(problemTwo.binarySearch('dog', 'tim')).toBeNull();
      expect(problemTwo.binarySearch({})).toBeNull();
    });
    it('Should return the correct value at the correct index', () => {
      expect(problemTwo.binarySearch(2, [1, 2, 3, 4, 5])).toEqual({value: 2, index: 1});
      expect(problemTwo.binarySearch(3, [1, 2, 3, 4, 5])).toEqual({value: 3, index: 2});
    });
    it('Should return null if the value is not present in the array', () => {
      expect(problemTwo.binarySearch(19, [1, 2, 3, 4, 5])).toBeNull();
      expect(problemTwo.binarySearch(8, [1, 2, 3, 4, 5])).toBeNull();
    });
  });
});


