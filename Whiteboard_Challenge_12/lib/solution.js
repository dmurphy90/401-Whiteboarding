'use strict';

const Stack = require('./stack.js');
const solution = module.exports = {};

solution.stackedQueue = class {
  constructor() {
    this.enqStack = new Stack();
    this.deqStack = new Stack();
  }

  twoStackEnqueue(val) {
    this.enqStack.push(val);
    return this.enqStack;
  }

  twoStackDequeue() {
    if(!this.deqStack.top && this.enqStack.top) return null;

    if(!this.deqStack.top) {
      this.deqStack = this.enqStack;
      this.enqStack = new Stack();
    }

    return this.deqStack.pop();
  }
};