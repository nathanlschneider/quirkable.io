"use client";
import Joomla from "@components/Logos/Joomla";
import WordPress from "@components/Logos/WordPress";
import Basecamp from "@components/Logos/Basecamp";
import Shopify from "@components/Logos/Shopify";
import WooCommerce from "@components/Logos/WooCommerce";
import { lexend_deca, nunito } from "../../app/fonts";
import styles from "@styles/platforms.module.scss";
import { useAnimate, useInView, stagger } from "framer-motion";
import { use, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Platforms = (props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.75 });

  useEffect(() => {
    if (isInView) {
      const doAnimate = async () => {
        await animate(scope.current, { opacity: 1, transform: "translateX(0)" }, { duration: 0.3, ease: "easeInOut" });
        await animate("svg, img", { opacity: 1, transform: "scale(1)" }, { duration: 0.3, delay: stagger(0.1), type: "spring", stiffness: 200 });
      };
      doAnimate();
    }
  }, [isInView]);
  return (
    <article ref={scope} className={styles.platforms}>
      <header>
        <div className="pre_headline">Platforms</div>
        <h2 className={`${lexend_deca.className}`}>Platforms we build solutions for</h2>
      </header>
      <section className={styles.platforms_inner}>
        <article className={styles.platform}>
          <Joomla width={128} height={128} viewBox={"0 0 32 32"} />
          <h3>Joomla</h3>
          <p>Custom Joomla Extensions</p>
        </article>
        <article className={styles.platform}>
          <WordPress width={128} height={128} viewBox={"0 0 32 32"} />
          <h3>WordPress</h3>
          <p>Custom Joomla Extensions</p>
        </article>

        <article className={styles.platform}>
          <Image src="/images/question.png" width={128} height={128} alt="Astronaut with a question mark" />
          <h3>
            Looking for a<br />
            custom solution?
          </h3>
          <div className="btn">CONTACT</div>
        </article>
        <article className={styles.platform}>
          <Shopify width={128} height={128} viewBox={"0 0 32 32"} />
          <h3>Shopify</h3>
          <p>Custom Joomla Extensions</p>
        </article>
        <article className={styles.platform}>
          <WooCommerce width={128} height={128} />
          <h3>WooCommerce</h3>
          <p>Custom Joomla Extensions</p>
        </article>
      </section>
    </article>
  );
};

export default Platforms;
