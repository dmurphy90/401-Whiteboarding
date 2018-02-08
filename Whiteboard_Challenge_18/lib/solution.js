'use strict';

const Queue = require('./queue.js');

const solution = module.exports = {};

solution.childCount = function(kary) {
  if (typeof kary !== 'object') return null;
  let current, result;
  let queue = new Queue();
  let mostChildren = 0;

  queue.enqueue(kary);

  while(queue.back) {
    current = queue.dequeue();
    if (current.children.length > mostChildren) {
      mostChildren = current.children.length;
      result = current;
    }
    current.children.map (child => queue.enqueue(child));
  }
  return result;
};