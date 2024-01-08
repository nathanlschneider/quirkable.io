'use client';
import styles from '@styles/panels.module.scss';
import Image from 'next/image';
import { inter, lexend_deca } from '../../app/fonts';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
		visible: { opacity: 1, y: 0, transition: {
			type: "spring",
			stiffness: 200
		} },
	};

	useEffect(() => {
		if (isInView) {
			mainControl.start('visible');
		}
	}, [isInView]);
	return (
		<section className={styles.panels}>
			<h5>Development</h5>

			<section className={styles.panels_inner}>
				<motion.div className={styles.header}>
					<h2 className={lexend_deca.className}>
						We develop ideas driven
						<br />
						by the future.
					</h2>
				</motion.div>
				<motion.div
					ref={ref}
					variants={container}
					initial='hidden'
					animate={mainControl}
					className={styles.panel_wrapper}>
					<motion.div variants={item} className={styles.panel}>
						<Image src='/images/socialmedia.webp' width={60} height={60} alt='' />
						<h3>Social Proof</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</motion.div>
					<motion.div variants={item} className={styles.panel}>
						<Image src='/images/socialmedia.webp' width={60} height={60} alt='' />
						<h3>Integration</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</motion.div>
					<motion.div variants={item} className={styles.panel}>
						<Image src='/images/socialmedia.webp' width={60} height={60} alt='' />
						<h3>Ecommerce</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</motion.div>
					<motion.div variants={item} className={styles.panel}>
						<Image src='/images/socialmedia.webp' width={60} height={60} alt='' />
						<h3>Customization</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</motion.div>
				</motion.div>
				{/* <Image className={styles.cube} src='/images/cube.png' width={600} height={600} alt='' />
				<Image className={styles.cube2} src='/images/cube.png' width={600 / 2} height={600 / 2} alt='' />
				<Image className={styles.cube3} src='/images/cube.png' width={600 / 3} height={600 / 3} alt='' /> */}
			</section>
		</section>
	);
};

export default Panels;
