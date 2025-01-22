'use client'; // This is important for client-side rendering

import React, { useState, useEffect } from 'react';

/**
 * TypeScript allows you to define custom types by using the `type` keyword
 * Custom types are user-defined types that enable you to specify the shape or structure 
 * of values in a more specific way than TypeScript’s built-in types.
 * 
 * Types are flexible and can describe objects, arrays, functions, and even complex combinations 
 * like unions and intersections.
 */

/**
 * Types in TypeScript are flexible. You can define primitive types, object types, 
 * and even complex types like union types or intersection types. Here's how to define a simple custom type:
 */

// Custom type definition
type WeatherDetailType = {
  weather: string;
  zipcode: string;
  temp?: number;  // Optional property
};

// Creating an object with the custom type
let weatherDetail: WeatherDetailType = {
  weather: "sunny",
  zipcode: "00000",
  temp: 30,
};

/**
 * In contrast to the `type` keyword, `interfaces` are typically used for object shapes and class definitions.
 * They are used primarily to describe the structure of objects or classes. 
 * Unlike types, interfaces can be merged, and they support inheritance through the `extends` keyword.
 */

/**
 * We will define an interface to describe the structure of weather details.
 * The main difference between an interface and a type is that interfaces
 * are better suited for object structures, and they can be extended.
 */

interface WeatherDetailInterface {
  weather: string;
  zipcode: string;
  temp?: number;  // Optional property
}

// Creating an object with the interface type
let weatherDetailFromInterface: WeatherDetailInterface = {
  weather: "cloudy",
  zipcode: "12345",
  temp: 22,
};

// Function that accepts a type or interface type and returns it
const getWeatherDetail = (data: WeatherDetailType | WeatherDetailInterface): WeatherDetailType | WeatherDetailInterface => data;

console.log(getWeatherDetail(weatherDetail));  // Using the type
console.log(getWeatherDetail(weatherDetailFromInterface));  // Using the interface

/**
 * Key Differences Between `type` and `interface`:
 * 
 * - `type` is used to define types for any kind of value (primitive, object, function, etc.), 
 *   and can also create complex types like union or intersection types.
 * - `interface` is specifically used for defining the shape of objects or classes.
 * - `interface` can be merged if declared multiple times, while `type` cannot.
 * - `type` can be used for union and intersection types, while `interface` is limited to objects.
 */

// Using `type` to define a union type
type WeatherCondition = "sunny" | "cloudy" | "rainy"; // Example of union type
let currentWeather: WeatherCondition = "sunny"; // This can only be one of the specified strings

// Using `interface` to extend another interface
interface ExtendedWeatherDetail extends WeatherDetailInterface {
  humidity: number;
}

let extendedWeatherDetail: ExtendedWeatherDetail = {
  weather: "rainy",
  zipcode: "67890",
  temp: 18,
  humidity: 80,
};

export default function AnotherPage() {
  return (
    <div>
      <h1>This page will be used for TypeScript practice</h1>
      <p>Weather condition: {weatherDetail.weather}</p>
      <p>Temperature: {weatherDetail.temp}°C</p>
      <p>Zipcode: {weatherDetail.zipcode}</p>
    </div>
  );
}
