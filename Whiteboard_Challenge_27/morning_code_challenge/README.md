# Problem Domain

Given a string of words find the highest scoring word, if two words score the same then return the word that appears earliest in the original string. All letters will be lowercase and all inputs are valid.

## Solution and Tests

The function takes in a string of words as the argument, and splits them off the spaces between them into an array. Afterwards it goes into a set of nested for loops, the first loop capturing a word and setting a value of 0 and then the next loop assigning a value to that word based on the lettering. After the current value is compared to the previous, and if the current value is higher than that is saved as the highest scoring word. Once all the words have been iterated through the highest scoring word is returned.

There are two tests, the first is testing to make sure that the function is working correctly and returning the expected output. The second test is making sure that on an empty string that is what is returned.