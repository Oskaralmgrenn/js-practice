// // //Create two string variables

// // How to commit: git add . (enter)
// // git commit -m "Name of commit eg. task 1" (enter)
// // git push origin main (only after committing all of them)

// //Challenge: Data Type Manipulation in JavaScript

// In this challenge, you will work with various data types in JavaScript. The goal is to perform different operations without using functions. Instead, you'll rely on basic language constructs and operators to manipulate data.

// Task 1: Number Manipulation
// 1. Create two variables, `num1` and `num2`, and assign any numerical values to them.
// 2. Add `num1` and `num2`, and store the result in a new variable called `sum`.
// 3. Subtract `num2` from `num1`, and store the result in a new variable called `difference`.
// 4. Multiply `num1` by `num2`, and store the result in a new variable called `product`.
// 5. Divide `num1` by `num2`, and store the result in a new variable called `quotient`.

// Task 2: String Concatenation
// 1. Create two variables, `str1` and `str2`, and assign any text values to them.
// 2. Concatenate `str1` and `str2`, and store the result in a new variable called `concatenatedStr`.

// Task 3: Boolean Manipulation
// 1. Create two variables, `bool1` and `bool2`, and assign them either `true` or `false`.
// 2. Create a new variable called `isBothTrue`, which should be `true` if both `bool1` and `bool2` are true. Otherwise, set it to `false`.
// 3. Create a new variable called `isAnyTrue`, which should be `true` if at least one of `bool1` or `bool2` is true. Otherwise, set it to `false`.

// Task 4: Array Operations
// 1. Create an array called `myArray` containing any five elements of your choice (numbers, strings, or a mix of both).
// 2. Access and store the first element of the array in a variable called `firstElement`.
// 3. Access and store the last element of the array in a variable called `lastElement`.
// 4. Change the value of the third element in the array to something else.
// 5. Add a new element to the end of the array.

// Task 5: Object Manipulation
// 1. Create an object called `person` with properties: `name`, `age`, and `country`. Assign any appropriate values of your choice to these properties.
// 2. Create a new property in the `person` object called `hobbies` and store an array of hobbies that the person enjoys.

// After completing each task, print the results to the console to verify your solutions.

// Remember, you should not use any functions in this challenge—focus on using basic JavaScript operations and syntax to manipulate data types. Happy coding!

// TASK 1:
const num1 = 3;
const num2 = 5;

const sum = num1 + num2;
const difference = num2 - num1;
const product = num1 * num2;
const quotient = num1 / num2;

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);

// Task 2: String Concatenation
// 1. Create two variables, `str1` and `str2`, and assign any text values to them.
// 2. Concatenate `str1` and `str2`, and store the result in a new variable called `concatenatedStr`.

const str1 = "Hello";
const str2 = "World";

const concatenatedStr = str1 + str2;

console.log(concatenatedStr);

// Task 3: Boolean Manipulation
// 1. Create two variables, `bool1` and `bool2`, and assign them either `true` or `false`.
// 2. Create a new variable called `isBothTrue`, which should be `true` if both `bool1` and `bool2` are true. Otherwise, set it to `false`.
// 3. Create a new variable called `isAnyTrue`, which should be `true` if at least one of `bool1` or `bool2` is true. Otherwise, set it to `false`.

const bool1 = true;
const bool2 = false;

const isBothTrue = bool1 && bool2;
const isAnyTrue = bool1 || bool2;

console.log(isBothTrue);
console.log(isAnyTrue);
