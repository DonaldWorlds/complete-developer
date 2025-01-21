'use client';

import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./page.module.css";

// Import your other components
import { GetFooBar, GetBar, GetBaz } from "./practicets/named";
import GetFoo from './practicets/default';
import HoistedVariables from "@/utils/HoistedVariables";
import NonHoistedVariables from "@/utils/NonHoistedVariables";
import ArrowFunction from "@/utils/ArrowFunction";
import CreatingString from "@/utils/CreatingSting";
import Asynchronous from "@/utils/Asynchronous";
import { DisplayPage } from "./display";


export default function Home() {
  const router = useRouter(); // Initialize useRouter

  // Function to handle navigation
  const goToAnotherPage = () => {
    router.push('/practicets/type-script'); // Correct path to your TypeScript example page
  };

  return (
    <div>
      {/* Button for navigation */}
      <button onClick={goToAnotherPage} className={styles.button}>
        Go to Practice TypeScript
      </button>

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
