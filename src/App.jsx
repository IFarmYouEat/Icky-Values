import "./App.css";
import data from "./PersonalValues.json";
import React, { useEffect, useState } from "react";

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <>
      <h1>Hello you Absolute Legend!</h1>

      <button class="bg-blue-500"> Hi </button>

      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h2>{item.value}</h2>
            <p>{item.shadow_behavior}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
