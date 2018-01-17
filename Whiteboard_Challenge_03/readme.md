**PROBLEM DOMAIN**
You're the junior conductor on a commuter train, and have been asked by the senior conductor to do a head count of passengers on the train.

Write a function const traverse = (engine) => {... which takes the engine as a starting location. Travel from the engine to the caboose, and console.log the number of passengers in each car as your progress. Each car, including the engine will have the following signature: js { <engine> value: 2, next: { <next car> value: 16, next: { <next car> } }

**TESTS**
My first test is making sure that an argument is passed into the function in the first place, if there is no argument then it looks for null which is set by the function.

My second test is making sure that if there is an argument passed into the function, that the argument is an object and not a a string or integer then it looks for null which is set by the function.

My third test is making sure the passengers key in the car object is an integer, and if it is not an integer than it is looking for the null set by the function.

My final test is making sure that the number of passengers in the object is correct.

