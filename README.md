# Learn-TDD

A simple JavaScript excercise intended to those where are new to TDD.

## Exercises

## Exercise - Basic Calculator

1. Create a file called app.test.js in js/test/
2. Import js/test/app.test.js in index.html
   - In some cases, the sequence of import will matter (sometimes it will cause an error if things are out of order)
3. Declare a module for "App"
   - Tip: use: QUnit.module("module name");
4. In app.test.js, write unit test to check if App is defined
   - Open index.html in Google Chrome
   - The test should fail
   - Tip: check if the instance of "App" is in the "window" object (refer to js/test/sample.test.js)
   - Tip: Use assert.notEqual(instance_name, undefined)
5. Create a file called app.js in js/src/
6. Import js/src/app.js in index.html (above the line for js/test/app.test.js)
7. Add a production code that will declare the instance of "App"
   - Tip: Add the instance of "App" to the "window" object (refer to js/src/sample.js)
8. Add a unit test for an add() function that accepts 2 parameters and returns the sum of the 2 parameters
   - Signiture: App.add(x, y)
   - Returns: sum of x and y
   - Example:
     - Usage: App.add(1, 2);
     - Returns: 3
9. Add a unit test for a subtract() function that accepts 2 parameters and returns the difference of the 2 parameters
   - Signiture: App.subtract(x, y)
   - Returns: difference of x and y
   - Example:
     - Usage: App.subract(3, 2);
     - Returns: 1
10. Add a unit test for a multiply() function that accepts 2 parameters and returns the product of the 2 parameters
    - Signiture: App.multiply(x, y)
    - Returns: product of x and y
    - Example:
      - Usage: App.multiply(2, 3);
      - Returns: 6
11. Add a unit test for a divide() function that accepts 2 parameters and returns the quotient of the 2 parameters
    - Signiture: App.divide(x, y)
    - Returns: quotient of x and y
    - Example:
      - Usage: App.divide(1, 2);
      - Returns: 0.5

## Exercise - Vending-Machine (Intermediate)

1. Clear all the code in /js/test/app.test.js and /js/src/app.js
2. Declare a module for "App"
   - Tip: use: QUnit.module("module name");
3. Read the requirements from "Requirements: Vending Machine (Change Calculator)"
   - In this exercise use assert.deepEqual() instead of assert.equal()
4. Create a unit test for each of the following case (you can add your own unit test to break down the problem):
   - "getChange(1,1) should equal [] - an empty array"
   - "getChange(215, 300) should return [50, 20, 10, 5]"
     - totalPayable = 215 // £2.15
     - cashPaid = 300 // £3.00
     - difference = 85 // 85p
     - change = [50,20,10,5] // 50p, 20p, 10p, 5p
   - "getChange(486, 600) should equal [100, 10, 2, 2]"
     - totalPayable = 486 // £4.86
     - cashPaid = 600 // £6.00
     - difference = 114 // £1.14
     - change = [100,10,2,2] // £1, 10p, 2p, 2p
   - "getChange(12, 400) should return [200, 100, 50, 20, 10, 5, 2, 1]"

## Requirements: Vending Machine (Change Calculator)

As a customer, I want to buy a selected item from the vending machine and see what my change is as a result into the various coins so that I can select one of the options and receive my change.

### Acceptance criteria

- A successful call of a function App.getChange() should return the change value in the various coins available
- Unit Tests should exist when the function is ready
- The selection of the desired return is out of scope

### Complementary User Story view

> Given a Price and amount of Cash from Customer Return: Change to customer (in notes and coins).

### Understand what is needed

- Create a function called App.getChange() that accepts two parameters: totalPayable and cashPaid
- For a given totalPayable (the total amount an item in the vending machine costs) and cashPaid (the amount of cash the person paid into the vending machine), App.getChange() should calculate the change we need to return to the customer
- **return** change as an array of coins (largest to smallest) that the vending machine will need to dispense to the customer.

### Example

- If a person buys an item costing £2.15 (we represent this as 215 pennies totalPayable) and pays £3 (3 x £1 or 300 pennies cashPaid) into the vending machine, the change will be 85p.
- To make up this 85p of change we would return four coins to the person: 50p, 20p, 10p and 5p.
- An array of these coins would look like: [50, 20, 10, 5]

### Coins

In the UK they have the following Coins (£ = pounds, p = pennies):

- £2
- £1
- 50p
- 20p
- 10p
- 5p
- 2p
- 1p

If we use the penny as the unit (i.e. 100 pennies in a pound) the coins can be represented as:

- 200 (£2)
- 100 (£1)
- 50 (50p)
- 20 (20p)
- 10 (10p)
- 5 (5p)
- 2 (2p)
- 1 (1p)

this can be stored as an Array:

`const COINS = [200, 100, 50, 20, 10, 5, 2, 1];`

**Note**: the same can be done for any other cash system ($ ¥ €) simply use the cent, sen or rin as the unit and scale up notes.

# JavaScript Syntax

1. How to declare a variable
   ```
   let variable_name = some_value;
   // some_value -> can be any type (boolean, int, string, etc)
   ```
2. How to declare an object

   ```
   let object_name = {
       // Value is assigned using colon ":" character instead of equal "="
       variable_name : value,

       // MUST BE SEPARATED BY COMMA FOR NEW ATTRIBUTES TO BE ADDED.
       // MUST NOT END WITH A SEMICOLON ";"

       function_name : function(parameter_name) {
           parameter_name = new_value;
           return output_value;
       }
   }

   /////////////
   /// Usage ///
   /////////////

   // Variable usage
   object_name.variable_name; // Allows you to get/set the value of this variable.

   // Function usage
   object_name.function_name('parameter') // Invokes this function and pass a parameter.
   // If the function has a return value, you can store the return value to a variable.
   ```

3. Add a variable/object to the global environment
   - `window.name = object`
4. Round to the nearest base decimal (lowest)
   - `Math.floor(1.1)` // returns 1
   - `Math.floor(1.4)` // returns 1
   - `Math.floor(1.5)` // returns 1
   - `Math.floor(1.6)` // returns 1
   - `Math.floor(1.9)` // returns 1
5. How to create a for loop
   ```
   let array_name = [1, 2, 3];
   // array_name.length -> gets the length of the array
   for (var i = 0; i < array_name.length; i++) {
       // do something here...
   }
   ```
6. How to add a new element in an array
   ```
   let array_name = []; // empty array
   array_name.push(new_value); // adds "new_value" to the array_name
   // new_value can be any type (boolean, int, string, etc)
   ```
7. [TESTING] How to compare two arrays:

   ```
   let array_one = [1, 2, 3];
   let array_two = [1, 2, 3];

   // INCORRECT COMPARISON. This comparison is not strict and will not compare the values of the two arrays
   assert.equal(array_one, array_two); // Returns false;

   // CORRECT USAGE
   assert.deepEqual(array_one, array_two); // Return true;
   ```

# References:

- [Introduction to Test Driven Development (TDD)](http://www.agiledata.org/essays/tdd.html)
- [Learn Test Driven Development (TDD)](https://github.com/dwyl/learn-tdd)
- [QUnit Cookbook](https://qunitjs.com/cookbook/)
- [QUnit API](https://api.qunitjs.com/)
