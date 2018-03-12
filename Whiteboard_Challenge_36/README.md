# Problem Domain

Write a function which takes two binary search trees as arguments, and compares them for structural likeness. If they are structurally identical,return true. Else return false.

## Solution and Testing

The solution traverses the tree, and uses a counter to count up the number of children on each side. After the number of children is counted then the numbers are evaluated against each other to verify if they are balanced (the child count is within 1 level of depth)

The first test is making sure that the expected output is returned. The second test is doing the same by making sure that an unbalanced tree is not returning true. The third and fourth tests are verifying that the tree is being constructed correctly and the specified values are put into the tree.