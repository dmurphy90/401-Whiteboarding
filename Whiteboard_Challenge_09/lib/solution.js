'use strict';

const Node = require('./nd.js');
const SLL = require('./sll.js');
const solution = module.exports = {};


solution.findNode = function(n, head) {
  if (!head || n < 0) return null;
  if (!(head instanceof SLL)) return null;
  console.log('initial head:', head);
  console.log('n value:', n);

  for (var itr = head, length = 0; itr; itr = itr.next, length++) 
  
    if (n >= length) return null;
  
  let i;
  for (itr = head, i = 0; i < length - n - 1; itr = itr.next, i++);
  console.log('final itr value:', itr);  
  return itr;
};

