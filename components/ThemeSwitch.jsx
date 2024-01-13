import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@styles/switch.module.scss";

const ThemeSwitch = () => {
  const [position, setPosition] = useState(0);
  const positions = ["flex-start", "center", "flex-end"];

  useEffect(() => {
    localStorage.setItem("position", position);
  }, []); // Update local storage when the component mounts

  const toggleSwitch = () => {
    position === 0 ? setPosition(1) : position === 1 ? setPosition(2) : setPosition(0);
  };

  return (
    <div className={styles.switch} style={{ justifyContent: positions[position] }} onClick={toggleSwitch}>
      <motion.div className={styles.handle} layout transition={spring} />
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default ThemeSwitch;
