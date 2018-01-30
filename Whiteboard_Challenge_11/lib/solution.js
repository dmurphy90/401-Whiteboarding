'use strict';

const solution = module.exports = {};

solution.findMissing = function(arr) {
  if (!arr || !Array.isArray(arr)) return null;
  let missingNums = [];
  let counter = 0;
  arr.sort(function(a, b) {
    a -b;
  });
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number'){
      return null;
    }
    if (counter + 1 !== arr[i]) {
      missingNums.push(arr[i] - 1);
      break;
    }
    counter++;
  }
  return missingNums;
};