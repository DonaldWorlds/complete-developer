// Import your components
'use client'

import React, { useState,useEffect } from 'react';

// Import your components
import { GetFooBar, GetBar, GetBaz } from './practicets/named';
import GetFoo from './practicets/default';

// Type for the keys of the mapping (component names)
type ComponentMapping = {
  GetFooBar: typeof GetFooBar;
  GetBar: typeof GetBar;
  GetBaz: typeof GetBaz;
  GetFoo: typeof GetFoo;
};

// Mapping component names to components
const componentMapping: ComponentMapping = {
  GetFooBar: GetFooBar,
  GetBar: GetBar,
  GetBaz: GetBaz,
  GetFoo: GetFoo,
};

export const DisplayPage = () => {
  // useState to keep track of the selected component name
  const [selectedComponentName, setSelectedComponentName] = useState<keyof ComponentMapping | null>(null);

  // Handle click to select a component
  const handleClick = (componentName: keyof ComponentMapping) => {
    setSelectedComponentName(componentName); // Update with the selected component's name
  };

  // Fetch the selected component from the mapping
  const SelectedComponent = selectedComponentName ? componentMapping[selectedComponentName] : null;

  return (
    <div>
      <h1>Dynamic Component Display</h1>
      <p>Select a component to view:</p>

      {/* Render buttons for each component */}
      {Object.keys(componentMapping).map((name) => (
        <div key={name}>
          <button onClick={() => handleClick(name as keyof ComponentMapping)}>{name}</button>
        </div>
      ))}

      {/* Conditionally render the selected component */}
      <div>
        {SelectedComponent ? (
          <SelectedComponent /> // Render the dynamically selected component
        ) : (
          <p>Click a button to view a component.</p>
        )}
      </div>
    </div>
  );
};
