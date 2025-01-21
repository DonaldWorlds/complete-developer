import React from "react";


// There are two types of exports in JavaScript/TypeScript: 
// 1. **Named exports** – allows you to export multiple values from a module.
// 2. **Default export** – allows you to export a single value, typically used when the module has a clear, singular purpose.


// Default Export:
// Use **default export** when the module has one clear purpose and a single export, 
// like exporting a single function, class, or object.


// Named Exports:
// Use **named exports** when the module has multiple things to export, like several functions or constants.

// This is an example of a **named export** for a function that returns 'foo bar'.
export const GetFooBar = function() {
    return <div>getfoobar</div>;
};
  
// Declaring additional functions, but not exporting them yet.
// These functions will be exported using a **named export** later.
const GetBar = function() {
    return <div>getBar</div>;
};

const GetBaz = function() {
    return <div>bax</div>;
};

// Exporting the functions `getBar` and `getBaz` using named exports.
// These can be imported individually using their exact names.
export { GetBar, GetBaz };



