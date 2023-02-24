import { useState, useEffect, useCallback } from 'react';

const MousemoveThrottle = () => {
  const [count, setCount] = useState(0);

  const throttle = (func, delay = 1000) => {
    let isWaiting = false;

    return (...args) => {
      if (isWaiting) return;
      // console.log('is waiting..', isWaiting);

      func(...args);
      isWaiting = true;

      setTimeout(() => {
        isWaiting = false;
      }, delay);
    };
  };

  const throttleHandler = useCallback(
    throttle((count) => setCount(count + 1)),
    []
  );

  const handler = () => {
    throttleHandler(count);
  };

  useEffect(() => {
    addEventListener('mousemove', handler);

    return () => {
      removeEventListener('mousemove', handler);
    };
  }, [handler]);

  return (
    <div>
      <h3>Mousemove with Throttle: {count}</h3>
    </div>
  );
};

export default MousemoveThrottle;
