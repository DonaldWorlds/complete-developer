
'use client';
import React from "react";

import { useRouter } from 'next/navigation'; // Import useRouter
import styles from './page.module.css';

// Import other components
import { GetFooBar, GetBar, GetBaz } from './practicets/named';
import GetFoo from './practicets/default';
import HoistedVariables from '@/utils/HoistedVariables';
import NonHoistedVariables from '@/utils/NonHoistedVariables';
import ArrowFunction from '@/utils/ArrowFunction';
import CreatingString from '@/utils/CreatingSting';
import Asynchronous from '@/utils/Asynchronous';
import { DisplayPage } from './display';

console.log('Rendering the main page'); // Debugging here

export default function Home() {
  const router = useRouter(); // Get the router

  // Function to navigate to another page
  const handleNavigation = () => {
    router.push('/another-page'); // Navigate to /another-page route
  };


  return (
    <div>
       <div>
      <h1>Welcome to the Main Page</h1>
      {/* Button that will trigger navigation */}
      <button onClick={handleNavigation}>Go to Another Page</button>
    </div>
    
      {/* Button for navigation */}
 
      <div className={styles.page}>
        {/* Example Components */}
        <GetFooBar />
        <GetBar />
        <GetBaz />
        <GetFoo />

        {/* Terminal Example Components */}
        <HoistedVariables />
        <NonHoistedVariables />
        <ArrowFunction />
        <CreatingString />
        <Asynchronous />

        {/* Dynamic Content Example */}
        <div>
          <DisplayPage />
        </div>
      </div>
    </div>
  );
}
