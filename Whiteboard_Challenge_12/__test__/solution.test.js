'use strict';

const solution = require('../lib/solution.js');
require('jest');

describe('Solutions Module', function() {
  describe('#stackedQueue', () => {
    it('Should return empty stacks', () => {
      expect(new solution.stackedQueue()).toEqual({"deqStack": {"maxSize": 1048, "size": 0, "top": null}, "enqStack": {"maxSize": 1048, "size": 0, "top": null}});
    });
    let queue = new solution.stackedQueue();
    queue.twoStackEnqueue(1);
    queue.twoStackEnqueue(2);
    queue.twoStackEnqueue(3);
    it('Should return an enqueue stack with Nodes containing 1, 2 and 3', () => {
      expect(queue).toEqual({"deqStack": {"maxSize": 1048, "size": 0, "top": null}, "enqStack": {"maxSize": 1048, "size": 3, "top": {"next": {"next": {"next": null, "val": 1}, "val": 2}, "val": 3}}});
    });
    let queue2 = new solution.stackedQueue();
    queue2.twoStackEnqueue(1);
    queue2.twoStackEnqueue(2);
    queue2.twoStackEnqueue(3);
    queue2.twoStackDequeue();
    it('Should return a dequeue stack with Nodes only containing 1 and 2', () => {
      expect(queue2).toEqual({"deqStack": {"maxSize": 1048, "size": 0, "top": null}, "enqStack": {"maxSize": 1048, "size": 3, "top": {"next": {"next": {"next": null, "val": 1}, "val": 2}, "val": 3}}});
    });
  });
});


