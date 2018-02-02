'use strict';

const SLL = require('../lib/sll.js');
const solution = require('../lib/solution.js');
require('jest');

let testList = new SLL();
testList.insertEnd(1);
testList.insertEnd(1);
testList.insertEnd(2);

let testOutput = new SLL();
testOutput.insertEnd(1);
testOutput.insertEnd(2);

describe('Solution Module', function() {
  it('Should only work with an input provided', () => {
    expect(solution.noDupes()).toBeNull;
  });
  it('Should verify that the input is an object', () => {
    expect(solution.noDupes(1)).toBeNull;
    expect(solution.noDupes([])).toBeNull;
    expect(solution.noDupes('tim')).toBeNull;
  });
  it('Should output a linked list without any duplicates', () => {
    expect(solution.noDupes(testList)).toEqual(testOutput);
  });
});