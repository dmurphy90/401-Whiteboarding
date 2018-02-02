# Whiteboard Challenge 14

## Problem Domain
Write a function called dedupe(head) that accepts the head of a linked list as it's argument, and returns a new linked list - Use a stack to identify any consecutive duplication, and remove them from the list.

## Solution and Tests
The function takes an input of a singly linked list, and then iterates through the list. It checks to see if the value of the current object is equal to the value of the next object, if the value is not the same it pushes that node value into a stack otherwise it keeps iterating. After it is done iterating it passes the values that were pushed into the stack into another singly linked list and returns that.

The first test is making sure that an input was provided in the first place. The second test is making sure that the input is a linked list and not an array, string, or number. And the final test is making sure the function is working correctly and returning the expected output.