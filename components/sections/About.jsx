'use client';
import styles from '@styles/about.module.scss';
import Image from 'next/image';
import { lexend_deca } from '@app/fonts';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const About = (props) => {
	const ref = useRef();
	const isInView = useInView(ref, { amount: .8 });

	return (
		<section ref={ref} className={styles.about}>
			<h5>Space is the Place</h5>
			<h1>Welcome Aboard!</h1>
			<h2
				className={lexend_deca.className}
				style={{ fontSize: '3rem', padding: '20px 60px', textAlign: 'center', maxWidth: '1366px' }}>
				Quirkable is a web software and services company that is here to help you reach for the stars.
			</h2>
			<section className={styles.about_inner}>
				<div className={styles.about_inner_left}>
					<Image
						ref={ref}
						style={{ transition: '1s', filter: isInView ? 'drop-shadow(2px 4px 67px orange)' : 'none' }}
						className={styles.aboard}
						src='/images/aboard.png'
						width={500}
						height={500}
						alt=''
					/>
				</div>
				<div className={styles.about_inner_right}>
					<article className={styles.quote}>
						<h5>WHat in the world?</h5>
						<div className={styles.quote_title}>quir·ka·ble</div>
						<div className={styles.quote_pronun} id='pronunciation'>
							<p>/kwɜːrkəbl/</p>
						</div>
						<ol className={styles.quote_list}>
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
						</ol>
					</article>
				</div>
			</section>
		</section>
	);
};

export default About;
