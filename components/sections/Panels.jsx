"use client";
import styles from "@styles/panels.module.scss";
import Image from "next/image";
import { inter, lexend_deca } from "../../app/fonts";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Panels = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.75 });
  const mainControl = useAnimation();

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <article className={styles.panels}>
      <motion.header className={styles.header}>
        <div className="pre_headline">Development</div>
        <h2 className={lexend_deca.className}>
          We develop ideas driven
          <br />
          by the future.
        </h2>
      </motion.header>
      <section className={styles.panels_inner}>
        <motion.section ref={ref} variants={container} initial="hidden" animate={mainControl} className={styles.panel_wrapper}>
          <motion.article variants={item} className={styles.panel}>
            <Image src="/images/socialmedia.webp" width={60} height={60} alt="" />
            <header>
              <h3>Social Proof</h3>
            </header>
            <p>Produce the highest quality work and services for every client, on every project.</p>
          </motion.article>
          <motion.article variants={item} className={styles.panel}>
            <Image src="/images/socialmedia.webp" width={60} height={60} alt="" />
            <header>
              <h3>Integration</h3>
            </header>
            <p>Produce the highest quality work and services for every client, on every project.</p>
          </motion.article>
          <motion.article variants={item} className={styles.panel}>
            <Image src="/images/socialmedia.webp" width={60} height={60} alt="" />
            <header>
              <h3>Ecommerce</h3>
            </header>
            <p>Produce the highest quality work and services for every client, on every project.</p>
          </motion.article>
          <motion.article variants={item} className={styles.panel}>
            <Image src="/images/socialmedia.webp" width={60} height={60} alt="" />
            <header>
              <h3>Customization</h3>
            </header>
            <p>Produce the highest quality work and services for every client, on every project.</p>
          </motion.article>
        </motion.section>
        <Image className={styles.cube} src="/images/cube.png" width={600} height={600} alt="" />
        <Image className={styles.cube2} src="/images/cube.png" width={600 / 2} height={600 / 2} alt="" />
        <Image className={styles.cube3} src="/images/cube.png" width={600 / 3} height={600 / 3} alt="" />
      </section>
    </article>
  );
};

export default Panels;
