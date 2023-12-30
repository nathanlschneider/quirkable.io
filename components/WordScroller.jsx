"use client";
import { motion, useScroll, useSpring, inView } from "framer-motion";
import styles from "@styles/wordscroller.module.scss";

const WordScroller = () => {
	const { scrollY } = useScroll();
	const translateX = useSpring(scrollY);


	const phrase = "CONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACTCONTACT";
	return (
		<motion.div id="tert" style={{ overflow: "hidden" }} className={styles.scrolling_phrase_wrapper}>
			<motion.div layout className={styles.scrolling_phrase} style={{ translateX, position: 'relative', left: -3500 }}>
				{phrase}
			</motion.div>
		</motion.div>
	);
};

export default WordScroller;
