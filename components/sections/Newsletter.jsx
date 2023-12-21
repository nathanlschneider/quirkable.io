"use client";
import { useState, useEffect, useRef } from "react";
import Hypno from "@components/Hypno";
import EmailForm from "@components/EmailForm";
import styles from "@styles/newsletter.module.scss";
import { lexend_deca, nunito } from "../../app/fonts";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Newsletter = (props) => {
	const interRef = useRef();
let inter = 1;

	useEffect(() => {
		setInterval(() => {
			inter++;
			if (inter === 360) {
				inter = 1;
			}
			interRef.current.style.filter = `hue-rotate(${inter}deg)`;
		}, 50);
	}, []);

	return (
		<>
			<motion.section ref={interRef} className={styles.newsletter}>
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
