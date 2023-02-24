import { useState, useEffect, useCallback } from 'react';

const MousemoveThrottle = () => {
  const [count, setCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  const handler = () => {
    setCount(count + 1);
  };

  const throttleCountHandler = (count) => {
    setThrottleCount(count + 1);
  };

  const throttle = (func, delay = 1000) => {
    let isWaiting = false;

    return (...args) => {
      if (isWaiting) return;
      console.log('is waiting..', isWaiting);

      func(...args);
      isWaiting = true;

      setTimeout(() => {
        isWaiting = false;
      }, delay);
    };
  };

  const throttleHandler = useCallback(throttle(throttleCountHandler), []);

  useEffect(() => {
    const handler2 = () => {
      throttleHandler(throttleCount);
    };

    addEventListener('mousemove', handler);
    addEventListener('mousemove', handler2);

    return () => {
      removeEventListener('mousemove', handler);
      removeEventListener('mousemove', handler2);
    };
  }, [handler, throttleCount]);

  return (
    <div>
      <h3>Mousemove: {count}</h3>
      <h3>Mousemove with Throttle: {throttleCount}</h3>
    </div>
  );
};

export default MousemoveThrottle;
