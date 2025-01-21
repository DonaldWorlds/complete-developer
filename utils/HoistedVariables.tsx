'use client'


// utils/HoistedVariables.tsx
import React, { useEffect } from 'react';

const HoistedVariables = () => {


  useEffect(() => {
    // Hoisting behavior in JavaScript
    function scope() {
      foo = 1; // 'foo' is implicitly global because it is assigned without 'var', 'let', or 'const'.
      var foo; // This is hoisted to the top of the function scope, so it will be undefined before assignment.
    }

    scope();

    console.log(scope);

    function scope2() {
      var foo;
      foo = 3;
    }

    scope2();

    console.log(scope2);

    var globalVaR = "global";
    (window as any).globalVaR = globalVaR; // Ensure globalVaR is attached to window

    function scope3() {
      var foo = "1";

      if (true) {
        var bar = "2";
      }

      console.log(globalVaR); // Outputs the global variable 'globalVaR'.
      console.log((window as any).globalVaR); // Access globalVaR on window

      console.log(foo);
      console.log(bar);
    }

    scope3();


    //Scope-Abiding variables 
    //the let key word is blocked scoped and can be accessed after declared this is consider non-hosited variables. block-scope variables isn't adde to the window object 
    //each variable has it own scope and the parser does not hoist them and therfore, the variable bar is not abiable. 

    
  }, []);

  return (
    <div>
      <h1>Hoisting and JavaScript Scope Example</h1>
      <p>Check the browser console for the output of the code.</p>
    </div>
  );
};

export default HoistedVariables;
