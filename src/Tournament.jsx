import React, { useEffect, useState } from "react";
import Match from "./Match";
import FinalDisplay from "./FinalDisplay";
import CurrentState from "./CurrentState";

function Tournament({ initialItems }) {
  const [items, setItems] = useState([]);
  const [loser, setLoser] = useState([]);
  const [winner, setWinner] = useState([]);
  const [index, setIndex] = useState(0);
  const [bracket, setBracket] = useState("initial")
  const [singleLossPool, setSingleLossPool] = useState([])
  
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
      if (winner.length > 1 && bracket === "initial") {
        setItems(winner);
        setWinner([]);
        setSingleLossPool(loser)
        setLoser([])
        setIndex(0);
        setBracket("winner")
      } else if (winner.length > 1 && bracket === "winner"){
        setItems(singleLossPool);
        setSingleLossPool(winner)
        setWinner([]);
        setLoser([]);
        setIndex(0);
        setBracket("loser")
      }else if (winner.length > 1 && bracket === "loser"){
        setItems(singleLossPool);
        setSingleLossPool(winner)
        setWinner([]);
        setLoser([]);
        setIndex(0);
        setBracket("winner")
      }else if (winner.length === 1) {
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
        <div>
        <Match
          top={currentTop}
          bottom={currentBottom}
          onSelectTop={handleTop}
          onSelectBottom={handleBottom}
        />
        <CurrentState
            bracket={bracket}
            winner={winner}
            loser={loser}
            items={items}
            singleLossPool={singleLossPool}
        />
        </div>
      ) : winnerChosen ? (
        <FinalDisplay winner={winner[0]} loser={loser} rest={singleLossPool} />
      ) : (
        <p className="text-xl mt-10">Preparing next round…</p>
      )}
    </div>
  );
}

export default Tournament;
