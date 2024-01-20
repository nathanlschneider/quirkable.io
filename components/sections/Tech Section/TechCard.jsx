"use client";
import { useState, useRef, useContext } from "react";
import { Constraint } from "./Constraint";
import { motion } from "framer-motion";
import styles from "@styles/tech.module.scss";
const TechCard = (props) => {
  const { h2, h3, p } = props;
  const [isOpen, setIsOpen] = useState(false);
  const constraintsRef = useContext(Constraint);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.article drag dragConstraints={constraintsRef}  layout whileDrag={{ scale: 1.2, boxShadow: "0px 0px 60px var(--pink)" }} className={styles.techcard}>
      <div className={styles.cardcontainer}>
        <header>
          <h3>{h3}</h3>
        </header>
        <section>
          <p>{p}</p>
        </section>
      </div>
    </motion.article>
  );
};

export default TechCard;
