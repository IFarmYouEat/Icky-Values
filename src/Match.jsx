function Match({ top, bottom, onSelectTop, onSelectBottom, question }) {
    return (
      <div className="flex flex-col items-center">
        <p className="mb-8 text-lg text-center">
          {question}
        </p>
  
        <button
          className="w-[500px] mb-6 px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded shadow-lg transition"
          onClick={onSelectTop}
        >
          {top?.shadow_behavior}
        </button>
  
        <button
          className="w-[500px] px-4 py-2 bg-blue-200 hover:bg-blue-300 rounded shadow-lg transition"
          onClick={onSelectBottom}
        >
          {bottom?.shadow_behavior}
        </button>
      </div>
    );
  }
  
  export default Match;
  