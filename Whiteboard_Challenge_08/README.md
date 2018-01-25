*PROBLEM DOMAIN*
Write a function that accepts the head of two linked list as it's two arguments, and return the intersection of those two linked lists.

*FUNCTIONALITY*
The function will iterate through both linked lists by having an iterator for each list with a value of .next, while being iterated through variables capturing the value of the Nodes are being evaluated against each other. If found to be equal the values are pushed to an array. When the lists have both been iterated through the values in the array are passed through a SLL constructor and the new SLL is returned.