import React, { useEffect, useState } from "react";
import Match from "./Match";
import FinalDisplay from "./FinalDisplay";

function Tournament({ initialItems }) {
  const [items, setItems] = useState([]);
  const [, setLoser] = useState([]);
  const [winner, setWinner] = useState([]);
  const [index, setIndex] = useState(0);
  
  const [winnerChosen, setWinnerChosen] = useState(false);

  useEffect(() => {
    // On load, set the first round
    setItems(initialItems);
    setWinner([]);
    setLoser([]);
    setIndex(0);
    setWinnerChosen(false);
  }, [initialItems]);

  const currentTop = items[index];
  const currentBottom = items[index + 1];

  useEffect(() => {
    if (index >= items.length && items.length > 0) {
      if (winner.length > 1) {
        setItems(winner);
        setWinner([]);
        setLoser([]);
        setIndex(0);
      } else if (winner.length === 1) {
        setWinnerChosen(true);
      }
    }
  }, [index, items.length, winner]);

  const handleTop = () => {
    if (!currentTop || !currentBottom) return;
    setWinner((w) => [...w, currentTop]);
    setLoser((l) => [...l, currentBottom]);
    setIndex((i) => i + 2);
  };

  const handleBottom = () => {
    if (!currentTop || !currentBottom) return;
    setWinner((w) => [...w, currentBottom]);
    setLoser((l) => [...l, currentTop]);
    setIndex((i) => i + 2);
  };

  return (
    <div className="flex flex-col items-center">
      {!winnerChosen && currentTop && currentBottom ? (
        <Match
          top={currentTop}
          bottom={currentBottom}
          onSelectTop={handleTop}
          onSelectBottom={handleBottom}
        />
      ) : winnerChosen ? (
        <FinalDisplay winner={winner[0]} />
      ) : (
        <p className="text-xl mt-10">Preparing next round…</p>
      )}
    </div>
  );
}

export default Tournament;
