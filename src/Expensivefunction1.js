import React, { useState } from "react";

function Expensivefunction() {
  const [count, setCount] = useState(0);

  console.log("Calculation running...");

  let total = 0;

  for (let i = 0; i < 50; i++) {
    total += i;
  }

  return (
    <div>
        <h1>WITHOUT USEMEMO</h1>
      <h2>Result: {total}</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Expensivefunction;