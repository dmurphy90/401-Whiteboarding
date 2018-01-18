**PROBLEM DOMAIN**
Write a function that will intersect two arrays

// Given the following two arrays
["mike", "sue", "tom", "kathy", "henry"]
["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"]

// Return
["sue", "kathy"]

**TEST DOCUMENTATION**
The first test checks to make sure that arguments are passed in, and if there are none passed in then it looks for the return of null.

The second test checks to make sure that the arguments that are passed in are arrays, and if they're not arrays then it looks for the return of null.

The third test checks to make sure that there are in fact matching elements in the arrays, and if there are none then it looks for the function to return an empty array.

The final test checks to make sure that no other data types besides arrays are put in, and if there are non-arrays put in then it looks for the return of null.