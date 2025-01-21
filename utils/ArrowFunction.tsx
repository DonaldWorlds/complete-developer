'use client'

import React, { useEffect } from 'react';

/**
 * Arrow Functions:
 * The arrow function syntax (=>) is a shorthand for writing functions. It simplifies function expressions.
 * - If an arrow function has only one parameter and one statement, the curly brackets and return keyword can be omitted.
 * - Arrow functions also have a different behavior with respect to the `this` keyword, which is lexically bound (i.e., it inherits `this` from the surrounding context).
 */

const ArrowFunction = () => {
  useEffect(() => {
    // Traditional function declaration
    const traditional = (x: number): number => {
      return x * x; // Squaring the number
    };

    // Arrow function with concise body
    const conciseBody = (y: number): number => y * y; // Automatically returns the result

    // Lexical scope with arrow functions:
    const lexicalScopeExample = () => {
      const inner = () => {
        // `this` inside the inner arrow function is lexically bound to the surrounding context (i.e., the component context)
        console.log("Inside inner function, this refers to:", this);
      };
      inner();
    };

    lexicalScopeExample(); // Demonstrate lexical scope of `this` inside arrow functions

    console.log("Traditional function result:", traditional(5)); // Call traditional function, should log 25
    console.log("Arrow function result:", conciseBody(5)); // Call concise arrow function, should log 25

    // The following code demonstrates `this` inside an object with traditional and arrow functions:

    const scopeOf = {
      scope: "defining scope",

      // Traditional function: `this` refers to the object `scopeOf` correctly
      traditional: function () {
        return this.scope; // "defining scope"
      },

      // Arrow function: `this` is lexically bound, and will refer to the surrounding context (component's context here)
      arrow: () => {
        return "lexical shape"; // In this case, we return a fixed value instead of `this.scope` because `this` is undefined in this context.
      }
    };

    // Fixing the issue by correctly calling both functions and logging their results
    console.log(scopeOf.traditional()); // Logs "defining scope"
    console.log(scopeOf.arrow()); // Logs "lexical shape"

    // Practical use cases of arrow functions:
    // - Arrow functions simplify syntax and make callbacks more concise.
    // - They can be used as arguments in higher-order functions, such as array methods like `filter`.

    // Example of using `filter` to filter out negative numbers from an array:
    let numbers = [-2, -1, 0, 1, 2]; // Corrected the numbers array

    // Traditional function expression inside `filter`:
    let traditionaltwo = numbers.filter(function (num) {
      return num >= 0; // Keeps only non-negative numbers
    });

    // Arrow function expression inside `filter`:
    let arrow = numbers.filter(num => num >= 0); // Keeps only non-negative numbers

    console.log("Traditional function result:", traditionaltwo); // Logs [0, 1, 2]
    console.log("Arrow function result:", arrow); // Logs [0, 1, 2]

  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <p>We will go over arrow functions and their syntax.</p>
      <p>Arrow functions have a shorter syntax and lexical scoping of the `this` keyword.</p>
      <p>Check the browser console to see the results of the functions and lexical scope example.</p>
    </div>
  );
};

export default ArrowFunction;
