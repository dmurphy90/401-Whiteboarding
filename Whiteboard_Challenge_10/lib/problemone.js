'use strict';

const problemOne = module.exports = {};

problemOne.checkBrace = function(str) { 
  if (!str || typeof str !== 'string') return null;

  let stack = [];
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '{') stack.push(strArr[i]);
    if (strArr[i] === '}') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
    
  if (stack.length > 0) return false;
  return true;
};