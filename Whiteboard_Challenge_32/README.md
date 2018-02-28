# Problem Domain

The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

Write two functions to print out the nth entry in the fibonacci series, recursively and iteratively
ex: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series

ex: fib(4) === 3

## Solution and Testing

The functions take in an input of a number, and uses fibonacci sequence to return the total up to the number provided. 

The first tests are checking to make sure that an input is provided in the first place, and the second tests are making sure that the inputs provided are in fact integers. The third test is making sure that the function is providing the expected output, and the fourth test is doing the same by making sure it's not giving a wrong answer.

## Why To Not Use Recursion

Recursion needs to iterate through the numbers twice as much, doubling your bigO notiation.