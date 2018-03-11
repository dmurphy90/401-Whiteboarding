'use strict';

const SLL = require('./SLL/sll');

module.exports = new class {
  treeToSll(tree) {
    if(!tree || typeof tree === 'string' || typeof tree === 'number') return null;
    let sll = new SLL();
    tree.inOrderTraversal();
    let test = tree.inOrder.sort((a, b) => b - a);
    while (test.length > 0) {
      sll.insertHead(test.shift());
    }
    return sll;
  }
};