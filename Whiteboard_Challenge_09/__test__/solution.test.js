'use strict';

const SLL = require('../lib/sll.js');
const solution = require('../lib/solution.js');
require('jest');

let test = new SLL();
test.insertEnd(2);
test.insertEnd(3);
test.insertEnd(4);
test.insertEnd(5);
test.insertEnd(6);
test.insertEnd(7);
test.insertEnd(8);
test.insertEnd(9);

describe('Solution Module', function() {
  describe('#findNode', () => {
    it('should verify that valid inputs are passed in', () => {
      expect(solution.findNode()).toBeNull();
      expect(solution.findNode('dog', 'tim')).toBeNull();
      expect(solution.findNode([])).toBeNull();
    });
    it('should verify that n is greater than 0', () => {
      expect(solution.findNode(0, test)).toBeNull();
    });
    it('should return the correct node based off the value of n', () => {
      expect(solution.findNode(3, test)).toBe({'next': {}, 'value':5});
    });
  });
});