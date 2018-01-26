'use strict';

const Node = require('./nd');
const solution = module.exports = {};


solution.findNode = function(head, n) {
  if (!head || n < 0) return null;
  if (!(head instanceof Node)) return null;


  for (var itr = head, length = 0; itr; itr = itr.next, length++) 
  
    if (n >= length) return null;

  let i;
  for (itr = head, i = 0; i < length - n - 1; itr = itr.next, i++);

  return itr;
};