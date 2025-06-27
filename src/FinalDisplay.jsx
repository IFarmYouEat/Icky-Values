function FinalDisplay({ winner, rest, loser }) {
  return (
    <div>
      <p>The winner is: {winner.value}</p>

      <p>Other top contenders:</p>
      {rest.map((item) => (
        <div key={item.id}>
          <p>{item.value}</p>
        </div>
      ))}
      {loser.map((item) => (
        <div key={item.id}>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default FinalDisplay;
