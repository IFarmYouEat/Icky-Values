import "./index.css";
import React, { useState } from "react";
import Tournament from "./Tournament";

// Import multiple test sets
import PersonalValues from "./data/PersonalValues.json";
import Leadership from "./data/Leadership.json";
import PercievedOrganizationalValues from "./data/PerceivedOrganizationalValues.json";
import DesiredOrganizationalValues from "./data/DesiredOrganizationalValues.json";

const datasets = {
  "Desired Organizational Values": {
    data: DesiredOrganizationalValues,
    prompt: "I wish my organization would prioritize."
  },
  "Leadership": {
    data: Leadership,
    prompt: "I would be upset to hear that someone in the organization"
  },
  "Percieved Organizational Values": {
    data: PercievedOrganizationalValues,
    prompt: "I think my organization prioritizes"
  },
  "Personal Values": {
    data: PersonalValues,
    prompt: "It bothers me more when someone close to me."
  }
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
        <Tournament initialItems={selectedSet.data} prompt={selectedSet.prompt} />
      )}
    </div>
  );
}

export default App;
