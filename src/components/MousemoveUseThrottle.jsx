import { useState, useEffect } from 'react';
import useThrottle from '../hooks/useThrottle';

const MousemoveUseThrottle = () => {
  const [count, setCount] = useState(0);

  const throttleHander = useThrottle((count) => setCount(count + 1));

  const handler = () => {
    throttleHander(count);
  };

  useEffect(() => {
    addEventListener('mousemove', handler);

    return () => {
      removeEventListener('mousemove', handler);
    };
  }, [handler]);

  return (
    <>
      <h3>Mousemove useThrottle: {count}</h3>
    </>
  );
};

export default MousemoveUseThrottle;
