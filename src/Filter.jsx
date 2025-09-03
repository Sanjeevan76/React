import React from "react";

export default function Filtera() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  // Filter only fruits that start with 'A'
  const filteredFruits = fruits.filter(fruit => fruit.startsWith("A"));

  return (
    <div>
      <h2>Fruits starting with A:</h2>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
