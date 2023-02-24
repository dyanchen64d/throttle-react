import { useRef } from 'react';

const useThrottle = (func, delay = 1000) => {
  const waiting = useRef(false);

  return (...args) => {
    if (waiting.current) return;

    func(...args);
    waiting.current = true;

    setTimeout(() => {
      waiting.current = false;
    }, delay);
  };
};

export default useThrottle;
