"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "@styles/hero.module.scss";

const Hero = (props) => {
  const wordRef_0 = useRef();
  const wordRef_1 = useRef();
  const wordRef_2 = useRef();
  const wordRef_3 = useRef();
  const wordRef_4 = useRef();
  const wordRef_5 = useRef();

  const container = {
    hidden: {},
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const item = {
    hidden: { opacity: 0, y: -80 },
    show: {
      opacity: [0, 1, 1, 1, 0],
      y: [-80, 0, 0, 0, 80],
      transition: {
        duration: 4,
        ease: "linear",
        times: [0, 0.1, 0.5, 0.9, 1],
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const heroPhrases = Array(
    ["Achieve", "More", "with", "Your", "Website."],
    ["Drive", "Results,", "Not", "Just", "Traffic."],
    ["Using", "Our", "Powerful", "Plugins"],
    ["and", "Supercharged", "Services,"],
    ["Blast", "Off", "to", "Success!"]
  );

  useEffect(() => {
    console.log("Interval Satrted");
    let counter = 0;
    wordRef_0.current.innerHTML = `${typeof heroPhrases[counter][0] !== "undefined" ? heroPhrases[counter][0] : ""}`;
    wordRef_1.current.innerHTML = `${typeof heroPhrases[counter][1] !== "undefined" ? heroPhrases[counter][1] : ""}`;
    wordRef_2.current.innerHTML = `${typeof heroPhrases[counter][2] !== "undefined" ? heroPhrases[counter][2] : ""}`;
    wordRef_3.current.innerHTML = `${typeof heroPhrases[counter][3] !== "undefined" ? heroPhrases[counter][3] : ""}`;
    wordRef_4.current.innerHTML = `${typeof heroPhrases[counter][4] !== "undefined" ? heroPhrases[counter][4] : ""}`;
    wordRef_5.current.innerHTML = `${typeof heroPhrases[counter][5] !== "undefined" ? heroPhrases[counter][5] : ""}`;
    counter++;

    const timer = setInterval(() => {
      wordRef_0.current !== null ? (wordRef_0.current.innerHTML = `${typeof heroPhrases[counter][0] !== "undefined" ? heroPhrases[counter][0] : ""}`) : null;
      wordRef_1.current !== null ? (wordRef_1.current.innerHTML = `${typeof heroPhrases[counter][1] !== "undefined" ? heroPhrases[counter][1] : ""}`) : null;
      wordRef_2.current !== null ? (wordRef_2.current.innerHTML = `${typeof heroPhrases[counter][2] !== "undefined" ? heroPhrases[counter][2] : ""}`) : null;
      wordRef_3.current !== null ? (wordRef_3.current.innerHTML = `${typeof heroPhrases[counter][3] !== "undefined" ? heroPhrases[counter][3] : ""}`) : null;
      wordRef_4.current !== null ? (wordRef_4.current.innerHTML = `${typeof heroPhrases[counter][4] !== "undefined" ? heroPhrases[counter][4] : ""}`) : null;
      wordRef_5.current !== null ? (wordRef_5.current.innerHTML = `${typeof heroPhrases[counter][5] !== "undefined" ? heroPhrases[counter][5] : ""}`) : null;

      counter++;
      if (counter === heroPhrases.length) {
        counter = 0;
      }
    }, 6000);

    return () => {
      clearInterval(timer);
      console.log("Interval cleared");
    };
  }, []);

  return (
        <motion.h1 variants={container} initial="hidden" animate="show" exit="exit" className={styles.xxl_h1}>
          <motion.div ref={wordRef_0} key="0" variants={item} />
          <motion.div ref={wordRef_1} key="1" variants={item} />
          <motion.div ref={wordRef_2} key="2" variants={item} />
          <motion.div ref={wordRef_3} key="3" variants={item} />
          <motion.div ref={wordRef_4} key="4" variants={item} />
          <motion.div ref={wordRef_5} key="5" variants={item} />
        </motion.h1>
  );
};

export default Hero;
