'use client';
import React, { useState, useEffect } from 'react';
import styles from '@styles/mouse.module.scss';

const CustomMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    position.y > 95 ? <div className={styles.custom_mouse_pointer} style={{ left: position.x, top: position.y }}/> : <div></div>
  );
};

export default CustomMousePointer;
