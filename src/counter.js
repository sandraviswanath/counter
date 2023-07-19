
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter) {
      setCounter(parseInt(savedCounter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className='container'>
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;
