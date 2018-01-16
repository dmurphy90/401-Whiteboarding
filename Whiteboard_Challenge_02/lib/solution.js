'use strict';

exports.highest = function highestNum(arr){
  if (!arr || !Array.isArray(arr) || arr.length < 2) return null;
  for (let i in arr) if (typeof arr[i] !== 'number') return null;
  let noDupes = Array.from(new Set(arr)).sort(function sortNumber(a,b){
    return a - b;
  });
  return {
    highest: Math.max(...noDupes),
    nextHighest: noDupes[noDupes.length -2]
  };
};