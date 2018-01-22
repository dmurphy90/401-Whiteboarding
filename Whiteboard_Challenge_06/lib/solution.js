'use strict';

const solution = module.exports = {};

solution.loop = function(value) {
  if(!value || value < 0 ||typeof value !== 'number') return null;
  let counter = 0;
  if(typeof value === 'number') {
    for(let i = counter; i < value; i++) {
      counter++;
    }
    return counter;
  }
  solution.loop(value);
};