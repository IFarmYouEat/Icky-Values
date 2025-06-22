import "./App.css";
import data from "./PersonalValues.json";
import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [loser, setLoser] = useState([]);
  const [winner, setWinner] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setItems(data);
  }, []);

  const firstRound = () => {};

const handleTop = () => {
  setWinner(w => [...w, currentTop]);
  setLoser(l => [...l, currentBottom]);
  setIndex(i => i +2)
};

const handleBottom = () => {
  setWinner(w =>[...w, currentBottom]);
  setLoser(l =>[...l, currentTop]);
  setIndex(i => i +2)
};

const currentTop = items[index];
const currentBottom = items[index + 1];


  return (
    <>
      <div className="flex justify-center">
        <h1>Hello you Absolute Legend!</h1>
      </div>
      <div className="flex flex-col justify-center">
        <p className="flex justify-center">Which coworker behavior would frusterate you more</p>
        <button className="" onClick={handleTop} disabled={!currentTop}>{currentTop ? currentTop.shadow_behavior : "No more items"}</button>
        <button className="" onClick={handleBottom}>{currentBottom ? currentBottom.shadow_behavior : "No more items"}</button>
      </div>

      <div className="flex justify-center px-20 w-full">
        <div className="w-1/2">
          <h4>Loser Bracket</h4>
          {loser.map((loser) => (
            <div key={loser.id}>
              <h2>{loser.value}</h2>
              <p>{loser.shadow_behavior}</p>
            </div>
          ))}
        </div>
        <div>
          <h4>Winner Bracket</h4>
          {winner.map((winner) => (
            <div key={winner.id}>
              <h2>{winner.value}</h2>
              <p>{winner.shadow_behavior}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
