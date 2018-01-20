'use strict';

const solution = module.exports = {};
require('jest');

solution.findMiddle = function (head) {
  if(!head || typeof head !== 'object') return null;
  
  // iterate to the end of the list with itr2
  // itr one iterates to the middle
  var itr, itr2;
  for(itr = itr2 = head; itr2.next && itr2.next.next; itr = itr.next, itr2 = itr2.next.next);

  return itr;
};