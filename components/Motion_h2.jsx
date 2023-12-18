'use client';
import { motion } from "framer-motion";

const Motion_h2 = (props) => {
    const {content, styles} = props;
  return (
    <motion.h2 layout initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{once: true}} transition={{duration: 1}} className={styles.h2}>{content}</motion.h2>
  )
}

export default Motion_h2
