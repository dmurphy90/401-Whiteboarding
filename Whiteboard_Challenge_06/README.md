**PROBLEM DOMAIN**
Write a recursive function called loop that has the function signature (count, callback) => undefined It should call the callback count times (count is expected to be > 0)

**TESTS**
The first test is making sure that a valid input is provided for the function to run, and if no input is provided it looks for a return of null

The second test is making sure that the input is greater than 0, and if the input is 0 then the test is looking for a return of null

The third test is verifying that the function has run the correct amount of times according to the input by looking for the return value of the incrementing counter.