##PROBLEM DOMAIN##
Complete today's whiteboard challenge and follow the submission instructions below:

Write a function which accepts a linked list as it's only argument, and returns true or false. - If the linked list is circular (it has no end), return true - Else return false

##FUNCTIONALITY##
The function will iterate through the linked list provided until it either reaches a next value of null returning false, or it will iterate through until the first iterator which moves 1 at a time, equals the 2nd iterator which moves 2 at a time returning true and indicating that it is a doubly linked list.