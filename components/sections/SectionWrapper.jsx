'use client';
import styles from '@styles/wrapper.module.scss';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const SectionWrapper = ({ children }) => {

    const ref = useRef();
	const isInView = useInView(ref, { amount: .2 });

	useEffect(() => {
		console.log(isInView ? 'none' : 'flex');
		document.querySelector(':root').style.setProperty('--display', isInView ? 'none' : 'flex');
	}, [isInView]);


	return <section ref={ref} className={styles.wrapper}>{children}</section>;
};

export default SectionWrapper;
