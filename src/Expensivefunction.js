import React, { useState,useMemo } from "react";

function Expensivefunction() {
  const [count, setCount] = useState(0);

  const expensiveCalculation =  useMemo(() => {
    console.log("Calculation running...");

    let total = 0;

    for (let i = 0; i < 50; i++) {
      total += i;
    }

    return total;
 }, []);

  //const result = expensiveCalculation();

  return (
    <div>
        <h1>WITH USEMEMO</h1>
      <h2>Result: {expensiveCalculation}</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Expensivefunction;