'use strict';

const solution = module.exports = {};

solution.noChild = function(root) {
  if(!root || typeof root === 'number' || typeof root === 'string') return null;
  let array = [];
  root.breadthFirst(current => {
    if(current.val.children.length === 0) {
      array.push(current.val);
    }
  });
  return array;
};