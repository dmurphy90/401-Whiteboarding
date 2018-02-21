'use strict';

const solution = module.exports = {};

solution.flipNinety = function(arr) {
  if(!arr || !Array.isArray(arr) || !arr.length) return null;

  for(let i in arr) {
    if(arr[0].length !== arr[i].length) return null;
  }

  let result = [];

  for (let i = 0; i < arr[0].length; i++) {
    result.push([]);
  }

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[0].length; j++) {
      result[j].push(arr[i][j]);
    }
  }
  return result;
};