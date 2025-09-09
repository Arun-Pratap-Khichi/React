import React from "react";

const MapFruit = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange","Apple"];

  return (
    <ul>
      {fruits.map(fruit => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
};

export default MapFruit;
