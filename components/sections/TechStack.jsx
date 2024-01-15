"use client";
import CSS3 from "@components/Logos/CSS3";
import HTML5 from "@components/Logos/HTML5";
import JavaScript from "@components/Logos/JavaScript";
import Node from "@components/Logos/Node";
import React from "@components/Logos/React";
import PHP from "@components/Logos/PHP";
import Python from "@components/Logos/Python";
import CSharp from "@components/Logos/CSharp";
import styles from "@styles/tech.module.scss";
import { motion } from "framer-motion";
import { lexend_deca } from "../../app/fonts";

const TechStack = (props) => {
  const container = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const item = {
    intial: {},
    animate: {
      x: [0, 896, 0],
      rotateY: [90, 270, 450],
      scale: [0.6, 0.4, 0.6, 1, 0.6],
      opacity: [0.5, 0.5, 1, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <article className={styles.technology}>
      <header style={{ position: "relative", zIndex: 10 }}>
        <div className="pre_headline">Technologies</div>
        <h2 className={lexend_deca.className}>Coding Languages We Use To Build Dreams</h2>
      </header>
      <motion.div className={styles.technologies} variants={container} initial="initial" animate="animate">
        <CSS3 variants={item} className={styles.tech} delay={0} />
        <HTML5 variants={item} className={styles.tech} delay={1000} />
        <JavaScript variants={item} className={styles.tech} delay={2000} />
        <Node variants={item} className={styles.tech} delay={3000} />
        <React variants={item} className={styles.tech} delay={4000} />
        <PHP variants={item} className={styles.tech} delay={5000} />
        <Python variants={item} className={styles.tech} delay={6000} />
        <CSharp variants={item} className={styles.tech} delay={7000} />
      </motion.div>
    </article>
  );
};

export default TechStack;
