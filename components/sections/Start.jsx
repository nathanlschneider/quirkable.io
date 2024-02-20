"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@styles/start.module.scss";
import Scroller from "@components/Scroller";
import Hero from "@components/Hero";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const Asteroid = dynamic(() => import("@components/Asteroid"), { ssr: false });

const Start = (props) => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (Math.ceil(latest) * 0.001 > 1) {
      setShowHero(false);
    } else {
      setShowHero(true);
    }
  });

  const initField = [
    <Asteroid key={1} />,
    <Asteroid key={2} />,
    <Asteroid key={3} />,
    <Asteroid key={4} />,
    <Asteroid key={5} />,
    <Asteroid key={6} />,
    // <Asteroid key={7} />,
    // <Asteroid key={8} />,
    // <Asteroid key={9} />,

    // <Asteroid key={2010} />,
    // <Asteroid key={2011} />,
    // <Asteroid key={2012} />,
    // <Asteroid key={2013} />,
    // <Asteroid key={2014} />,

    // <Asteroid key={1001} src='/images/seo2.png' alt='SEO' />,
    // <Asteroid key={1002} src='/images/socialmedia.webp' alt='Social Thums Up' />,
    // <Asteroid key={1003} src='/images/heart.png' alt='Social Heart' />,
    // <Asteroid key={1004} src='/images/code.png' alt='Code' />,
    // <Asteroid key={1005} src='/images/emoji.png' alt='Emoji' />,
    // <Asteroid key={1006} src="/images/hashtag.png" alt="Hashtag" />,
    // <Asteroid key={1007} src="/images/at.png" alt="@" />,
  ];

  const container = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { delay: 0.3, type: "spring", stiffness: 200 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  const [asteroidId, setAsteroidId] = useState(10);
  const [asteroidField, setAsteroidField] = useState(initField);
  const [showHero, setShowHero] = useState(props.showHero);

  const handleClick = (e) => {
    if (!e.target.id.includes("particle")) {
      setAsteroidId(asteroidId + 1);
      setAsteroidField([...asteroidField, <Asteroid delay={0} key={asteroidId} id={asteroidId} x={e.pageX} y={e.pageY} />]);
    }
  };

  return (
    <>
      <section style={props.style} className={styles.start} onClick={handleClick}>
        <section className={styles.start_inner}>
          <AnimatePresence>
            {showHero && (
              <motion.div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}} variants={container} exit="exit">
                <Hero showHero={showHero} />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div variants={container} initial="hidden" animate="show" transition={{ delay: 1 }} className={styles.plus_wrapper}>
            <Image className={styles.plus} src="/images/plus.png" width={950} height={1050} alt="" />
          </motion.div>
          {/* <Image className={styles.rocket} src="/images/rocket.png" width={400} height={400} alt="Space Rocket" /> */}
          {/* <Image className={styles.rocket_small} src="/images/rocket.png" width={400 / 3} height={400 / 3} alt="Space Rocket" /> */}
          <motion.div variants={container} initial="hidden" animate="show" className={styles.plus_wrapper_b}>
            <Image className={styles.plus_b} src="/images/plus.png" width={950 / 2} height={1050 / 2} alt="" />
          </motion.div>
          {/* <Image className={styles.astro_float} src="/images/laptop.webp" width={256} height={361} alt="" /> */}
          {asteroidField}
        </section>
      </section>
    </>
  );
};

export default Start;
