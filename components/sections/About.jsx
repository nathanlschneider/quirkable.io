"use client";
import styles from "@styles/about.module.scss";
import Curve from "@components/Curve";
import Image from "next/image";
import Motion_h2 from "@components/Motion_h2";
import { motion } from "framer-motion";
const About = (props) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, x: 100 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<section className={styles.about}>
							<h1>Welcome Aboard</h1>

			<section className={styles.about_inner}>
				<div className={styles.about_inner_left}>
					<Image className={styles.wheel} src='/images/wheel.webp' width={600} height={600} alt='' />
				</div>
				<div className={styles.about_inner_right}>
					<motion.article
						variants={container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true }}
						className={styles.quote}>
						<motion.div variants={item} key='0' className={styles.quote_title}>
							quir·ka·ble
						</motion.div>
						<motion.div variants={item} key='1' className={styles.quote_pronun} id='pronunciation'>
							<p>/kwɜːrkəbl/</p>
						</motion.div>
						<motion.ol variants={item} key='2' className={styles.quote_list}>
							<li>
								<strong>Adjective</strong>
								<p>Capable of embracing and adapting to unique or unconventional qualities.</p>
								<em>
									The quirkable software effortlessly accommodated the diverse needs of its users.
								</em>
							</li>
							<li>
								<p>
									Pertaining to a quality or feature that is distinctive, peculiar, or characterized
									by individuality.
								</p>
								<em>
									The quirkable design of the product set it apart in a market saturated with standard
									offerings.
								</em>
							</li>
						</motion.ol>
					</motion.article>
				</div>
			</section>
		</section>
	);
};

export default About;
