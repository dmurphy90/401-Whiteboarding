'use strict';

let solution = module.exports = {};

solution.sumExpo = function(base, exp) {
  if(!base || !exp || typeof base !== 'number' || typeof exp !== 'number') return null;

  return Math.pow(base, exp).toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
};