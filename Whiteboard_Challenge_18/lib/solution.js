'use strict';

const Tree = require('./kary-tree.js');

const solution = module.exports = {};

solution.childCount = function(kary) {
  if(!kary || typeof kary === 'number' || typeof kary === 'string') return null;
};