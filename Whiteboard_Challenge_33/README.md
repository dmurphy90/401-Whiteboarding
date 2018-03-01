# Problem Domain

Write a function while takes two arguments, a base number and an exponential, and returns the sum of the return value's digits.

For example: fn(2, 15) => 32768 => 26

## Solution and Testing

The solution takes in the numbers as arguments, then multiplies the first number to the power of the second number. After it does this it turns the new multiplied value into a string, splits it into an array on nothing, and then iterates over the array turning each index back into an integer and add them all together returning the total of the all the integers.

The first test verifies that an input is provided in the first place, the second test verifies that the input is infact a number. The third test verifies that the test is returning the expected values and the fourth test is doing the same by making sure that a wrong answer will not return.