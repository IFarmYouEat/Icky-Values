import "./index.css";
import data from "./PersonalValues.json";
import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [loser, setLoser] = useState([]);
  const [winner, setWinner] = useState([]);
  const [index, setIndex] = useState(0);
  const [round, setRound] = useState(1);
  const [winnerChosen, setWinnerChosen] = useState(false);

  useEffect(() => {
    setItems(data);
  }, []);

  const currentTop = items[index];
  const currentBottom = items[index + 1];

  useEffect(() => {
    if (index >= items.length && items.length > 0) {
      if (winner.length > 1) {
        // Start next round
        setItems(winner);
        setWinner([]);
        setLoser([]);
        setIndex(0);
        setRound((r) => r + 1);
      } else if (winner.length === 1){
        setWinnerChosen(true);
        alert(`Tournament finished! Winner: ${winner[0].shadow_behavior}`);
      }
    }
  }, [winner, items.length, index]);

  const handleTop = () => {
    setWinner((w) => [...w, currentTop]);
    setLoser((l) => [...l, currentBottom]);
    setIndex((i) => i + 2);
  };

  const handleBottom = () => {
    setWinner((w) => [...w, currentBottom]);
    setLoser((l) => [...l, currentTop]);
    setIndex((i) => i + 2);
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl mb-12">Hello you Absolute Legend!</h1>
      </div>

      {!winnerChosen ? (
        <div className="flex flex-col items-center">
          <p className="mb-8">
            Which coworker behavior would frusterate you more
          </p>
          <button
            className="w-[500px] mb-8 bg-gray-300 shadow-lg"
            onClick={handleTop}
            disabled={!currentTop}
          >
            {currentTop ? currentTop.shadow_behavior : "No more items"}
          </button>
          <button
            className="w-[500px] mb-8 bg-gray-300 shadow-lg"
            onClick={handleBottom}
          >
            {currentBottom ? currentBottom.shadow_behavior : "No more items"}
          </button>
        </div>
      ) : (
        <p>The winner is {winner[0]?.shadow_behavior}</p>
      )}

      <div>
        <p> The Current Round is: {round}</p>
      </div>
      <div className="flex justify-center py-20 w-full">
        <div className="w-1/2">
          <h4 className="text-2xl">Loser Bracket</h4>
          {loser.map((loser) => (
            <div key={loser.id}>
              <p>{loser.shadow_behavior}</p>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-2xl">Upcoming</h4>
          {items.map((items) => (
            <div key={items.id}>
              <p>{items.shadow_behavior}</p>
            </div>
          ))}
        </div>
        <div>
          <h4 className="text-2xl">Winner Bracket</h4>
          {winner.map((winner) => (
            <div key={winner.id}>
              <p>{winner.shadow_behavior}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
