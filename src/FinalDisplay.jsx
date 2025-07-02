function FinalDisplay({ winner, rest, loser }) {
    return (
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl text-center space-y-6">
        <h2 className="text-2xl font-bold">
          The Winner:
        </h2>
        <p className="text-xl font-semibold text-gray-100 bg-blue-600 rounded-lg py-2">
          {winner.value}
        </p>
  
        <div>
          <h3 className="text-lg font-semibold text-gray-600 mt-4">
            Secondary Priorities:
          </h3>
          <ul className="mt-2 space-y-1">
            {loser.map((item) => (
              <li
                key={item.id}
                className="bg-blue-400 rounded px-3 py-1 text-gray-100"
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <h3 className="text-lg font-semibold text-gray-600 mt-4">
            Tertiary Priorities:
          </h3>
          <ul className="mt-2 space-y-1">
            {rest.map((item) => (
              <li
                key={item.id}
                className="bg-blue-200 rounded px-3 py-1 text-grey-700"
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default FinalDisplay;
  