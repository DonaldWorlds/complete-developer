'use client'

import { useEffect } from 'react'

// Define some TypeScript types, interfaces, and functions
type User = {
    id:number,
    name: string,
    email: string
};

interface Product{
    is:number,
    title: string,
    price: string
};

const gretUser = (user: User) : string => {
    return `Hello, ${user.name}`
}
 
const calculateTotal = (products: Product[]): number => {
    return products.reduce((total, product) => total + product.price, 0);
  };

export default function TypeScriptPractice(){
    const PracticeLogging = () =>{
        console.log("Practicing TypeScript!")
        console.log("TypeScript makes javaScript safer")
    };

    return(
        <div style={{ padding:'20px', fontFamily:'Arial, san-serif'}}>
            <h1>TypeScript Practice Page</h1>
            <p>
                Open the browser console (right-click and select "Inspect" → "Console") to see TypeScript
            </p>

            <ul>
                <li>Logged a user object with a greeting function</li>
                <li>Displayed a list of products and calculated their total price.</li>
            </ul>
        </div>
    )

}
