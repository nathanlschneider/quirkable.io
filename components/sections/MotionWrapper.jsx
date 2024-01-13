'use client';
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const MotionWrapper = ({ children }) => {
  const ref = useRef();
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.2, once: true });

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={animationVariants} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
