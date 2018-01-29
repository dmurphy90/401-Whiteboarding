# Problem One

## Problem Domain One

Write a function checkBraces() to examine whether the pairs and the orders of { and } are correct in a string, using a Stack.

### Solution and Tests 
This function takes in a string as an argument. It then splits the string into an array, is iterated through with any opening curly braces ```{``` being pushed into an array. During the same iteration any instances of closing curly braces ```}``` cause an item in the array of opening curly braces to be popped out. If the array is empty then it will return true, otherwise if any opening curly braces are left in the array then it will return false.

The first test is checking that the input provided is indeed a string, and is looking for a null if the input is not a string. The second test is making sure that the function is responding correctly if there are no opening braces left in the Array. And the third function is making sure that the function is responding correctly if there aare any opening curly braces left in the array.

## Problem Domain Two

Write a function that accepts n and a sorted array as it's arguments, and implement binary search on the array using n as the value to search.

If found, return the value n and the location in the array as {value: n, index: i}
Else return null

## Solution and Tests

This function takes in a value ```n``` and a sorted array as arguments. It searches for the position of ```n``` within the array by using a binary search. After evaluating the number and the length of the array it will search only half of the array at first, cutting down it's search area in half until it finds where ```n``` is located within the array returning it's value and the index position of it.

The first test is providing that a valid input was provided, and is looking for a null if there is an incorrect amount of inputs or if they are invalid data types. The second test is making sure that the function returns the correct values and indexes as long as the inputs are valid. The third test is to make sure the function is working correctly by looking for a null.