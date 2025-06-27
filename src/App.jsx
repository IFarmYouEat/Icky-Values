import "./index.css";
import React, { useState } from "react";
import Tournament from "./Tournament";

// Import multiple test sets
import PersonalValues from "./data/PersonalValues.json";
// import Set2 from "./data/Set2.json";
// import Set3 from "./data/Set3.json";
// import Set4 from "./data/Set4.json";

const datasets = {
  "Personal Values": PersonalValues,
  // "Test Set 2": Set2,
  // "Test Set 3": Set3,
  // "Test Set 4": Set4,
};

function App() {
  const [selectedSet, setSelectedSet] = useState(null);

  const handleSelect = (e) => {
    const setName = e.target.value;
    setSelectedSet(datasets[setName]);
  };

  return (
    <div className="app">
      <h1 className="text-3xl text-center my-8">Icky Values Test</h1>

      {!selectedSet ? (
        <div className="flex flex-col items-center">
          <p className="mb-4">Choose a test dataset:</p>
          <select onChange={handleSelect} className="p-2 border rounded">
            <option value="">-- Select --</option>
            {Object.keys(datasets).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </div>
      ) : (
        <Tournament initialItems={selectedSet} />
      )}
    </div>
  );
}

export default App;
