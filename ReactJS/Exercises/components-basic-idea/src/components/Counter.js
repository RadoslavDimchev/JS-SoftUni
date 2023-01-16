import { useState } from 'react';

export const Counter = (props) => {
  const [count, setCount] = useState(props.start || 0);
  const [direction, setDirection] = useState('None');

  function decreaseHandler() {
    setCount(oldValue => oldValue - 1);
    setDirection('Decreased');
  }

  function clearHandler() {
    setCount(0);
  }

  function increaseHandler() {
    setCount(oldValue => oldValue + 1);
    setDirection('Increased');
  }

  return (
    <div>
      <h1 style={{ fontSize: 16 + count + 'px' }}>Counter</h1>
      <p>Direction: {direction}</p>
      <p>Number is {count > 0 ? 'positive' : 'negative'}</p>
      <h2>Count: {count}</h2>

      <button onClick={decreaseHandler}>-</button>
      <button onClick={clearHandler}>clear</button>
      <button onClick={increaseHandler}>+</button>
    </div>
  );
};