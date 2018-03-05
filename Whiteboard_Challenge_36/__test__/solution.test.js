'usr strict';

const bst = require('../lib/binarytree');
const solution = require('../lib/solution');
require('jest');

describe('Solution Module', function() {
  describe('#matchTree', () => {
    let testBTS = new bst;
    testBTS.add(20);
    testBTS.add(10);
    testBTS.add(25);

    let testBTS2 = new bst;
    testBTS2.add(40);
    testBTS2.add(41);
    testBTS2.add(39.5);

    let testBTS3 = new bst;
    testBTS3.add(40);
    testBTS3.add(41);
    testBTS3.add(39);
    testBTS3.add(36);

    it('Should return true for identical binary tree structures', () => {
      expect(solution.matchTree(testBTS, testBTS2)).toBeTruthy();
    });

    it('Should return false for un-identical binary tree structures', () => {
      expect(solution.matchTree(testBTS, testBTS3)).toBeFalsy();
    });

    it('Should return true if the values are present within the tree', () => {
      expect(testBTS.isPresent(10)).toBeTruthy();
      expect(testBTS.isPresent(20)).toBeTruthy();
      expect(testBTS.isPresent(25)).toBeTruthy();
    });

    it('Should return false if the values do not exsist within the tree', () => {
      expect(testBTS.isPresent(11)).toBeFalsy();
      expect(testBTS.isPresent(21)).toBeFalsy();
      expect(testBTS.isPresent(26)).toBeFalsy();
    });
  });
});