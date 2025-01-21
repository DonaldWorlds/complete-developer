import React from 'react'

// There are two types of exports in JavaScript/TypeScript: 
// 1. **Named exports** – allows you to export multiple values from a module.
// 2. **Default export** – allows you to export a single value, typically used when the module has a clear, singular purpose.


// Default Export:
// Use **default export** when the module has one clear purpose and a single export, 
// like exporting a single function, class, or object.

// This is an example of **default export** using a function:
const GetFoo = () => {
    return <div>Foo james k</div>;
  };

export default GetFoo;






