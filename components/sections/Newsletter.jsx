"use client";
import { useState, useEffect, useRef } from "react";
import Hypno from "@components/Hypno";
import EmailForm from "@components/EmailForm";
import styles from "@styles/newsletter.module.scss";
import { lexend_deca, nunito } from "../../app/fonts";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Newsletter = (props) => {
	const interRef = useRef();

	useEffect(() => {
		let start = 290;
		let end = 480;
		let current = start, increment = 1;

		function update() {
			current += increment;
			if (current === end || current === start) increment *= -1;
			interRef.current.style.filter = `hue-rotate(${current}deg)`;
			setTimeout(update, 100);
		  }
		
		  update();
	}, []);

	return (
		<>
			<motion.section ref={interRef} initial={{opacity: 0, scale:0}} animate={{opacity: 1, scale: 1}} transition={{duration: 1, type: 'spring'}} className={styles.newsletter}>
				<section className={`${styles.newsletter_inner} ${nunito.className}`}>
					<h2 className={`${lexend_deca.className}`}>Stay in the loop</h2>
					<p>
						Get the latest on updates and new releases.
						<br />
						Straight to your inbox.
					</p>
					<EmailForm />
					<Hypno className={styles.contact_hypno} />
				</section>
			</motion.section>
		</>
	);
};

export default Newsletter;
