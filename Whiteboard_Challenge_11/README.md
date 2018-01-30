# Problem Domain

You have an integer array which contains numbers from 1 to 100 but one number is missing, you need to write a function calculateMissing = (array) => {...} to find that missing number in an array.

## Solution and Tests
The function takes in an array of integers, and sorts the array numerically. A counter is set starting at 0, incrementing for each index iterated through by the following for loop. The counter + 1 is checked to make sure that it is the current value at the index in the array, and if it is not than that number is missing and is then pushed up to an empty array for all missing numbers. The array of missing numbers is then returned.

The first test is making sure that a valid input of an array is provided for the function. The second test is making sure that all of the entries in the array are numbers and nothing else. The third test is just testing that the function is working as it should and returning the currect value.