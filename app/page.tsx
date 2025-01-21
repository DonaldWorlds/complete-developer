// 'use client' declaration ensures client-side rendering
'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation"; // Import useRouter

// Import your other components
import { GetFooBar, GetBar, GetBaz } from "./practicets/named";
import GetFoo from './practicets/default';
import HoistedVariables from "@/utils/HoistedVariables";
import NonHoistedVariables from "@/utils/NonHoistedVariables";
import ArrowFunction from "@/utils/ArrowFunction";
import CreatingString from "@/utils/CreatingSting";
import Asynchronous from "@/utils/Asynchronous";
import { DisplayPage } from "./display";
import Link from 'next/link';

export default function Home() {
  const router = useRouter(); // Initialize useRouter

  // Function to handle navigation
  const goToAnotherPage = () => {
    router.push('/practicets/type-script'); // Correct path should start with '/'
  };

  return (
    <>
      <div>
        <button onClick={goToAnotherPage}>Go to Another Page</button>
      </div>

      <div className={styles.page}>
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
        
        <div>
          <DisplayPage />
        </div>
      </div>
    </>
  );
}
