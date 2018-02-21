# Whiteboard Challenge 27

## Problem Domain

Given a 2-dimensional array of numbers, rotate the array 90 degrees.

## Solution and Tests

The function takes in an array as its argument. It creates an empty result array, then executes a series of iterations through the array. The first iteration creates empty sub-arrays in the result array. The second and third iterations are nested in each other and for each sub-array index[j] is pushed to the result array[j].

The first test is checking to make sure the function is performing correctly and returning the correct output, the second test is doing the same but with an array of floating point integer arrays. The third test is making sure that there are indexes in the array provided, and the fourth test is making sure that the input is indeed an array.