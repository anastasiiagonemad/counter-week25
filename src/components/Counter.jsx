import React, { useState } from 'react';
import '../components/Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter</h1>
      <p>
        You count <span>{count}</span> times
      </p>
      <div className="btn">
        <button onClick={() => setCount(count + 1)}>
          Click me for counting
        </button>
      </div>
    </div>
  );
}

export default Counter;
