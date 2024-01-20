"use client";
import styles from "@styles/threecards.module.scss";
import Image from "next/image";
import { inter, lexend_deca } from "../../app/fonts";
import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect, useRef } from "react";

const ThreeCards = (props) => {
  const ref = useRef();
  const sectionInView = useInView(ref, { amount: 0 });
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.75 });

  useEffect(() => {}, [sectionInView]);

  useEffect(() => {
    if (isInView) {
      const doAnimate = async () => {
        await animate(scope.current, { opacity: 1, transform: "translateX(0)" }, { duration: 0.3, ease: "easeInOut" });
        await animate("img", { opacity: 1, transform: "scale(1)" }, { duration: 0.3, delay: stagger(0.1), type: "spring", stiffness: 200 });
      };
      doAnimate();
    }
  }, [isInView]);

  return (
    <article ref={ref} className={styles.threecards}>
      <header>
        <div className="pre_headline">Services</div>
        <h2 className={lexend_deca.className}>
          We launch visionary ideas
          <br />
          propelling you towards the future
        </h2>
      </header>
      <section className={styles.threecards_inner}>
        <section ref={scope} className={styles.cards}>
          <article className={styles.card}>
            <Image src="/images/puzzle.webp" width={200} height={200} alt="Puzzle Piece" />
            <section className={styles.card_content}>
              <header>
                <h3>Plugins & Addons</h3>
              </header>
              <p>Enhance your CMS and eCommerce platforms with our versatile plugins and addons. Seamlessly integrate functionalities, optimize workflows, and elevate user experiences.</p>
              <div className={`${styles.card_btn} btn`}>Read More</div>
            </section>
          </article>
          <article className={styles.card}>
            <Image src="/images/cog.webp" width={200} height={200} alt="Cog" />
            <section className={styles.card_content}>
              <header>
                <h3>SaaS Solutions</h3>
              </header>
              <p>Tailored for B2B, our MicroSaaS solutions are the engine driving digital innovation. Empower developers and businesses with scalable, efficient, and customized tools for success.</p>
              <div className={`${styles.card_btn} btn`}>Read More</div>
            </section>
          </article>
          <article className={styles.card}>
            <Image src="/images/thumbsup.webp" width={200} height={200} alt="Thumbs Up" />
            <section className={styles.card_content}>
              <header>
                <h3>Developer-Focused</h3>
              </header>
              <p>Our products are designed with developers in mind. Unlock the full potential of your projects with Quirkable.io, where coding meets creativity for unparalleled digital solutions.</p>
              <div className={`${styles.card_btn} btn`}>Read More</div>
            </section>
          </article>
        </section>
      </section>
    </article>
  );
};

export default ThreeCards;

{
  /* <div className={styles.rocket_wrapper}>
<Image className={styles.rocket} src="/images/jetpack.png" width={200} height={200} alt="Rocket" />
</div> */
}
