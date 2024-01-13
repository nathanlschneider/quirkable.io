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

const TechStack = () => {
  const container = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const item = {
    intial: { x: 0, y: 0, rotateY: -90, opacity: 1 },
    animate: {
      x: [-400, 400, -400],
      y: [0],
      rotateY: [-90, -270, -450],
      scale: [0.5, 0.25, 0.5, 1, 0.5],
      opacity: [0.5, 0.25, 1, 1, 1],

      transition: {
        duration: 8,
        repeat: Infinity,
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
        <motion.article className={styles.tech} variants={item}>
          <CSS3 width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
        <motion.article className={styles.tech} variants={item}>
          <HTML5 width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
        <motion.article className={styles.tech} variants={item}>
          <JavaScript width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
        <motion.article className={styles.tech} variants={item}>
          <Node width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
        <motion.article className={styles.tech} variants={item}>
          <React width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
        <motion.article className={styles.tech} variants={item}>
          <PHP width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
        <motion.article className={styles.tech} variants={item}>
          <Python width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
        <motion.article className={styles.tech} variants={item}>
          <CSharp width={128} height={128} viewBox={"0 0 32 32"} />
        </motion.article>
      </motion.div>
    </article>
  );
};

export default TechStack;
