'use client'

import React, { useEffect } from 'react';

const CreatingString = () => {

  useEffect(() => {
    // Untagged and tagged template literals are a simple way to add variables and expressions to a string.
    // This is string interpolation, which can span multiple lines and include single and double quotation marks
    // without requiring escaping. The `${}` will indicate the template expression.

    // An untagged template literal is just a string enclosed in backticks.
    // The parser will interpolate the variables and expressions and return a string.
    // This is used to concatenate multiple strings.

    let a = 1; // Declare a variable `a` and assign it the value 1.
    let b = 2; // Declare a variable `b` and assign it the value 2.

    // Using a template literal: `${}` is used for embedding variables `a`, `b`, and an expression `a + b` into the string.
    // This creates a string that shows the addition of `a` and `b`.
    let string = `${a} + ${b} = ${a + b}`;  // The resulting string will be "1 + 2 = 3".
    
    console.log(string);  // Logs the result to the console: "1 + 2 = 3".

    // A tagged template literal is defined by a function that processes the literal string and its interpolated values.
    // The function `tag` receives the literal parts of the string and the interpolated values as arguments.

    // Fixing TypeScript errors: Adding explicit types
    function tag(literal: TemplateStringsArray, ...values: number[]): string {
      // `literal` is an array of the static parts of the template string (type: TemplateStringsArray)
      // `values` is an array of the interpolated expressions (type: number[])

      console.log("literal", literal);  // Logs the array of literal parts.
      console.log("values", values);  // Logs the array of interpolated values.

      let result: number;  // Declare a variable to store the result of the evaluated expression.

      // Process the literal string to determine how to evaluate the expression based on the operator in the literal string.
      switch (literal[1]) {
        case " plus ":
          result = values[0] + values[1];  // If the string contains "plus", add the two values.
          break;
        case " minus ":
          result = values[0] - values[1];  // If the string contains "minus", subtract the two values.
          break;
        default:
          result = NaN;  // Default case for unsupported operators.
      }
      // Return a string showing the result of the operation performed with the values and literal text.
      return `${values[0]}${literal}${values[1]} is ${result}`;
    }

    let output = tag`What is ${a} plus ${b}`;  // Call the `tag` function with a tagged template literal.

    console.log(output);  // Logs the processed result, which will be: "1 plus 2 is 3".

  }, []);  // `useEffect` runs once after the component mounts.

  return (
    <div>
      <h1>Creating strings and using template literals</h1>
      {/* Display a heading in the component UI */}
    </div>
  );
};

export default CreatingString;
