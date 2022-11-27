import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [stepValue, setStepValue] = useState<number>(1);

  const incrementCount = () => setCount((count) => count + stepValue);
  const decrementCount = () => setCount((count) => count - stepValue);
  const resetCount = () => setCount(0);
  const updateStepValue = (value: string) => {
    const parsedValue = parseFloat(value);
    setStepValue(isNaN(parsedValue) ? 1 : parsedValue);
  };

  return (
    <div className="counter">
      <div className="counter-value">{count}</div>
      <div className="counter-buttons">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
      <div className="counter-step-control">
        <label htmlFor="counter-step-control">Increment/Decrement by:</label>
        <input
          type="number"
          id="counter-step-control"
          value={stepValue}
          min={0}
          onChange={(e) => updateStepValue(e.currentTarget.value)}
        />
      </div>
      <div className="counter-reset">
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
