'use strict';

const solution = module.exports = {};
require('jest');

solution.evaluate = function(list){
  if(!list || typeof list !== 'object') return null;

  let itr, itr2 = list;
  while(itr && itr2 && itr2.next) {
    itr = itr.next;
    itr2 = itr2.next.next;

    if (itr === itr2) {
      return true;
    }
  }
  return false;
};