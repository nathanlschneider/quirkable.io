"use client";
import { useState, useEffect } from 'react';
import '@styles/animations.scss';

const AnimationWrapper = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className={isMounted ? 'fade-in active' : 'fade-out inactive'}>
      {children}
    </div>
  );
};

export default AnimationWrapper;