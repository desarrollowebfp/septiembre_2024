import { useState } from "react";

const Estado = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Estado;
