import "./App.css";
import data from "./PersonalValues.json";
import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [loser1, setLoser1] = useState([]);
  const [winner1, setWinner1] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <>
      <h1>Hello you Absolute Legend!</h1>

      <button className="bg-blue-500"> Hi </button>
      <div className="flex justify-center px-20 w-full">
        <div className="w-1/2">
          <h4>Loser Bracket</h4>
          {loser1.map((loser1) => (
            <div key={loser1.id}>
              <h2>{loser1.value}</h2>
              <p>{loser1.shadow_behavior}</p>
            </div>
          ))}
        </div>
        <div>
          <h4>Winner Bracket</h4>
          {winner1.map((winner1) => (
            <div key={winner1.id}>
              <h2>{winner1.value}</h2>
              <p>{winner1.shadow_behavior}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
