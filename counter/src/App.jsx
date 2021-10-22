import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
      <button onClick={() => setCounter(0)}>Zero</button>
    </div>
  );
};

export default App;