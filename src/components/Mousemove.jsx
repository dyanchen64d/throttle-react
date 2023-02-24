import { useState, useEffect } from 'react';

const Mousemove = () => {
  const [count, setCount] = useState(0);

  const handler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    addEventListener('mousemove', handler);

    return () => {
      removeEventListener('mousemove', handler);
    };
  }, [handler]);

  return (
    <>
      <h3>Mousemove: {count}</h3>
    </>
  );
};

export default Mousemove;
