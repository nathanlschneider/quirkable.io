"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@styles/start.module.scss";
import Scroller from "@components/Scroller";
import Hero from "@components/Hero";
import StripeLogo from "@components/NavBar/StripeLogo";
import { motion } from "framer-motion";


const Asteroid = dynamic(() => import("@components/Asteroid"), { ssr: false });

const Start = (props) => {
	const initField = [
		<Asteroid key={1} />,
		<Asteroid key={2} />,
		<Asteroid key={3} />,
		<Asteroid key={4} />,
		<Asteroid key={5} />,
		<Asteroid key={6} />,
		<Asteroid key={7} />,
		<Asteroid key={8} />,
		<Asteroid key={9} />,
	];

	const container = {
		hidden: { opacity: 0, scale: 0 },
		show: { opacity: 1, scale: 1, transition: { delay: .3, type: "spring", stiffness: 200 } },
	};
	const [asteroidId, setAsteroidId] = useState(10);
	const [asteroidField, setAsteroidField] = useState(initField);

	const handleClick = (e) => {
		console.log(e);
		setAsteroidId(asteroidId + 1);
		setAsteroidField([...asteroidField, <Asteroid delay={0} key={asteroidId} id={asteroidId} x={e.pageX} y={e.pageY} />]);
	};

	const handleScroll = (e) => {
		console.log(e);
	};

	return (
		<>
			<section className={styles.start} onClick={handleClick}>
				<section className={styles.start_inner}>
					<StripeLogo className={styles.center_logo}/>
					<motion.div variants={container} initial="hidden" animate="show" transition={{ delay: 1}}className={styles.plus_wrapper}>
						<Image className={styles.plus} src='/images/plus.png' width="950" height="1050" alt='' />
					</motion.div>
					<Image
						className={styles.rocket}
						src='/images/rocket.png'
						width={400}
						height={400}
						alt='Space Rocket'
					/>
					<Image
						className={styles.rocket_small}
						src='/images/rocket.png'
						width={400 / 3}
						height={400 / 3}
						alt='Space Rocket'
					/>
					<motion.div variants={container} initial="hidden" animate="show" className={styles.plus_wrapper_b}>
						<Image
							className={styles.plus_b}
							src='/images/plus.png'
							width={950 / 2}
							height={1050 / 2}
							alt=''
						/>
					</motion.div>

					{asteroidField}
					<Hero time='3' delay='3)'/>
				</section>
			</section>
			<Scroller onClick={handleScroll} />
		</>
	);
};

export default Start;
