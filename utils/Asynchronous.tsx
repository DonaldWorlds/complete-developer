'use client'

import React, { useEffect } from 'react';

const Asynchronous = () => {
  useEffect(() => {
    // JavaScript implements asynchronous code using callback functions.
    // Callback functions are executed after another function completes its task (usually I/O or API call).

    // Callback function that handles the result of the readFile operation (assuming Node.js environment)
    const callback = (err: NodeJS.ErrnoException | null, data: Buffer) => {
      if (err) {
        // If an error occurs during the file read operation, log the error message.
        console.error("Error reading file:", err.message);
      } else {
        // If the read operation is successful, log the file content.
        console.log(`File content: ${data.toString()}`);
      }
    };

    // If this code were running in a Node.js environment, we'd use fs.readFile
    // fs.readFile("file.txt", callback); // Uncomment this line if you're using Node.js on the server side

    // Using Promises
    // Promises represent operations that do not return an immediate result.
    // Instead, they promise to return the result at some point in the future.

    // Function that fetches data from a URL and logs the result to the console using Promises.
    // `fetch` returns a Promise by default, which resolves with a Response object.
    function fetchDataWithPromises(url: string) {
      fetch(url)
        .then((response) => response.json()) // Convert the response to JSON
        .then((json) => console.log(json))    // Log the JSON data
        .catch((error) => {
          // If an error occurs during the fetch operation, log it.
          console.error(`Error: ${error}`);
        });
    }

    // Example usage of fetchDataWithPromises function:
    fetchDataWithPromises('https://jsonplaceholder.typicode.com/posts');  // Fetch example JSON data

    // Async and Await
    /**
     * The async and await keywords are simpler than using the Promise-based `.then()` syntax.
     * You can mark the function as `async` and use `await` to pause the function until the Promise resolves.
     */

    async function fetchDataWithAsyncAwait(url: string) {
      try {
        // Fetching the data and awaiting the response
        const response = await fetch(url);
        const json = await response.json();
        console.log(json); // Log the fetched JSON data
      } catch (error) {
        // If an error occurs during the fetch operation, log the error
        console.error(`Error: ${error}`);
      }
    }

    // Example usage of fetchDataWithAsyncAwait function:
    fetchDataWithAsyncAwait("https://jsonplaceholder.typicode.com/posts");

    /**
     * First, we declare the function as `async` to enable the `await` keyword inside the function.
     * Then, we use `await` to wait for the response of the `fetch` call.
     * `await` simplifies the code by handling the asynchronous call synchronously.
     * This pattern requires us to handle errors manually, unlike with promises, where there's a default `.catch()` method.
     * We must wrap `await` statements in a `try...catch` block to handle error states.
     */

  }, []); // This effect runs once when the component is mounted.

  return (
    <div>
      <h1>Asynchronous File Reading</h1>
      <p>Check the console to see the result of the asynchronous file reading operation and fetch data.</p>
      <p>Async and await functions</p>
    </div>
  );
};

export default Asynchronous;
