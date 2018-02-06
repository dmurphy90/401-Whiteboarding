'use strict';

const Tree = require('../lib/kary-tree.js');
const solution = require('../lib/solution.js');
require('jest');

let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5);
test.insert(2,4); //last leaf
test.insert(3,15); //last leaf
test.insert(1,4); //last leaf

let testTwo = new Tree();
testTwo.insert(5);

let answer = [ { val: 3, children: [] }, { val: 2, children: [] }, { val: 1, children: [] } ];
let answerTwo = [{ children: [], val: 5}];

describe('Solution module', function() {
  describe('#noChild', () => {
    it('Should verify that an argument was passed into the function', () => {
      expect(solution.noChild()).toBeNull;
    });
    it('Should verify that the input provided is valid', () => {
      expect(solution.noChild(1)).toBeNull;
      expect(solution.noChild('test')).toBeNull;
    });
    it('Should output the expected result', () => {
      expect(solution.noChild(test)).toEqual(answer);
      expect(solution.noChild(testTwo)).toEqual(answerTwo);
    });
    it('Should not return an output that is the same as an input', () => {
      expect(solution.noChild(test)).not.toEqual(test);
    });
  });
});