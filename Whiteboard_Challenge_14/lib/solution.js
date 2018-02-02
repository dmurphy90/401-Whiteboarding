'use strict';

const solution = module.exports = {};
const Stack = require('./stack.js');
const SLL = require('./sll.js');


solution.noDupes = function(input) { //The Big O is O(n2)
  if (!input || typeof input == 'string' || typeof input == 'number' || Array.isArray(input)) return null;
  let stack = new Stack();
  let sll = new SLL();
  let cur = input.head;
  while (cur.next) {
    if (cur.value !== cur.next.value) {
      stack.push(cur.value);
      cur = cur.next;
    } else {
      cur = cur.next;
    }
  }
  stack.push(cur.value);
  while (stack.size > 0) {
    sll.insertHead(stack.pop().value);
  }
  return sll;
};