'use strict';

const Tree = require('../lib/kary-tree');
const solution = require('../lib/solution.js');
require('jest');

let test = new Tree();
test.insert(5);
test.insert(15,5);
test.insert(4,5);
test.insert(2,4); 
test.insert(3,15); 
test.insert(1,4); 


describe('Solution module', function() {
  describe('#valueTotal', () => {
    it('Should verify that an argument was passed into the function', () => {
      expect(solution.valueTotal()).toBeNull;
    });
    it('Should verify that the input provided is valid', () => {
      expect(solution.valueTotal(1)).toBeNull;
      expect(solution.valueTotal('test')).toBeNull;
    });
    it('Should output the expected result', () => {
      expect(solution.valueTotal(test)).toEqual(30);
    });
    it('Should not return an output that is the same as an input', () => {
      expect(solution.valueTotal(test)).not.toEqual(31);
    });
  });
});