'use strict';

const solution = module.exports = function(int) {
  if(!int || typeof int !== 'number') return null;
  if(int <= 2) return 1;

  return solution(int - 1) + solution(int - 2);
};