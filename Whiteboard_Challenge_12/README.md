# Problem Domain

Implement a Queue using only two Stacks

## Solution and Tests

The function moves whatever is in the enqueue stack to the dequeue stack as long as the enqueue stack is not empty, it then assigns a new stack to the enqueue stack.

The tests are first checking to make sure that if no stacks are present then only an empty queue will be returned.

The second test is making sure the ```solution.twoStackEnqueue(val)``` method works correctly and is looking for Nodes containing the correct values provided into the val placeholder.

The third test is making sure the ```solution.twoStackDequeue``` method is working correctly by adding 3 new Nodes, and removing the last then checking to make sure the last Node was correctly removed.