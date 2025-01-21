'use client'

import React, { useEffect } from 'react';

const NonHoistedVariables = () => {
  useEffect(() => {
    // Declare globalVar in the component's scope
    let globalVar = "global";

    function scope() {
      let foo = "1"; // foo is block-scoped

      if (true) {
        let bar = "2"; // bar is block-scoped and will not be accessible outside the block
        console.log(bar); // Log bar inside its block scope
      }

      console.log(globalVar); // Logs the value of globalVar
      // `window.globalVar` doesn't exist because `globalVar` is not attached to the window object
      console.log((window as any).globalVar); // You could attach it manually to window, if needed

      console.log(foo); // Logs the value of foo
      // Uncommenting below will throw an error because bar is not accessible outside the block.
      // console.log(bar); // This will cause an error as bar is block-scoped
    }

    scope();
  }, []);

  return (
    <div className="div">
      <h1>Non-hoisting variables with let</h1>
      <h2>Check the browser console to see the output</h2>
    </div>
  );
};

export default NonHoistedVariables;
