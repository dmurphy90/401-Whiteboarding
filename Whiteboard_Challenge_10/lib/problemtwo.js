'use strict';

const problemTwo = module.exports = {};

problemTwo.binarySearch = function(n, array) {
  if (!n || !array) return null;
  if (typeof n !== 'number' || !Array.isArray(array)) return null;

  let searchMax = array.length - 1;
  let searchMin = 0;
  let center;

  while (searchMin <= searchMax) {
    center = Math.floor((searchMax + searchMin) / 2);
    if (array[center] === n) return {value: n, index: center};
    if (array[center] < n) searchMin = center + 1;
    if (array[center] > n) searchMax = center - 1;
  }

  return null;
};