'use client'

import React, { useEffect } from 'react';

const LoopThrough = () => {
  useEffect(() => {
    // array.map allows you to run a function on each array item and return a new array with the modified items,
    // preserving the original array (i.e., it does not mutate the original array).
    // Developers use array.map in React to generate lists or populate JS datasets from arrays.

    const original: number[] = [1, 2, 3, 4]; // Declare original array with numbers only.

    // The map method takes a callback function that operates on each item in the array.
    // Here we are multiplying each item by 10.
    const multiplied = original.map((item) => item * 10);

    console.log(`Original array: ${original}`); // Logs the original array: [1, 2, 3, 4]
    console.log(`Multiplied array: ${multiplied}`); // Logs the new array with each item multiplied by 10: [10, 20, 30, 40]

    // In the map function:
    // - The first argument `item` is the current item in the array during each iteration.
    // - The function returns the item multiplied by 10, which is collected in the new array `multiplied`.

    // Spreading Arrays and Objects
    // The spread operator `...` is used to spread out or expand the values of an array or the properties of an object.
    // It allows copying and passing values without altering the original data structure.

    // The spread operator copies its content into a new variable or constant that allocates its own memory,
    // avoiding direct mutations of the original data.

    // Example with an object:
    let object = { fruit: "apple", color: "green" };

    // Using the spread operator to create a shallow copy of the object, followed by destructuring.
    let { fruit, color }: { fruit: string; color: string } = { ...object }; // Explicitly define type for fruit and color

    console.log(`fruit: ${fruit}, color: ${color}`); // Logs: fruit: apple, color: green

    // Modify the local variable `color` but keep the original object intact.
    color = "red"; // Changes only the local `color` variable, not the `object`.

    console.log(`object.color: ${object.color}, color: ${color}`); 
    // Logs: object.color: green, color: red
    // The object is not mutated. `color` here is a separate variable, and changing it doesn't affect the `object`.

    // Using the spread operator to clone an array and avoid mutating the original array
    let originalArray: number[] = [1, 2, 3]; // Declare original array with numbers
    let clonedArray: number[] = [...originalArray]; // Spread operator to clone the array

    // Modify the cloned array
    clonedArray[0] = 10;  // Updates clonedArray, but not the originalArray
    clonedArray[1] = 20;
    clonedArray[2] = 30;

    console.log(`originalArray: ${originalArray}, clonedArray: ${clonedArray}`); 
    // Logs: originalArray: [1, 2, 3], clonedArray: [10, 20, 30]

    // Note: Even though we modified clonedArray, the originalArray remains unchanged due to the spread operator.

  }, []); // The effect runs once when the component is mounted

  return (
    <div>
      <h1>Array Map and Spread Operator Example</h1>
      <p>Check the console to see how array.map works to modify and return a new array and how the spread operator is used.</p>
    </div>
  );
};

export default LoopThrough;
