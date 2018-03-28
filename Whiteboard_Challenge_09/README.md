# PROBLEM DOMAIN

Write a function which accepts n and a linked list as it's arguments, and will return the nth from last node in a linked list

## Solution and Testing

The method ```findNthNodeFromEnd``` takes in a number and a linked list, and finds the node representing that number starting at the end of the list


The tests are first looking for a valid input, if there is no valid input then the function cannot run. They are also looking to make sure that the output we receive is what we expected to verify it works, and then we are just testing to make sure that the number provided is not greater than the amount of nodes in the list. 