'use strict';

const solution = require('../lib/solution.js');
const Tree = require('../lib/kary-tree.js');

let test = new Tree();
test.insert(2);
test.insert(3, 2);
test.insert(4, 2);
test.insert(5, 2);

let expectedOutput = {"children": [{"children": [], "value": 3}, {"children": [], "value": 4}, {"children": [], "value": 5}], "value": 2};

describe('Solution Module', function() {
  describe('#childCount', () => {
    it('Should verify that an argument was passed into the function', () => {
      expect(solution.childCount()).toBeNull;
    });
    it('Should verify that the input provided is valid', () => {
      expect(solution.childCount(1)).toBeNull;
      expect(solution.childCount('test')).toBeNull;
    });
    it('Should output the expected result', () => {
      expect(solution.childCount(test.root)).toEqual(expectedOutput);
    });
  });
});