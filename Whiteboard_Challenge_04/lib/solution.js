'use strict';
const solution = module.exports = {};
require('jest');


solution.matchUp = function match(a, b) {
  if(!a || !Array.isArray(a)) return null;
  if(!b || !Array.isArray(a)) return null;
  let matches = [];
  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < b.length; j++){
      if(a[i] === b[j]){
        matches.push(a[i]);
      }
    }
  }
  return matches;
};