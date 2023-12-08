"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@styles/start.module.scss";
import TouchIcon from "@components/TouchIcon";
const Asteroid = dynamic(() => import('@components/Asteroid'), { ssr: false })

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

	const [asteroidId, setAsteroidId] = useState(10);
	const [asteroidField, setAsteroidField] = useState(initField);

	const handleClick = (e) => {
		console.log(asteroidId);
		setAsteroidId(asteroidId + 1);
		setAsteroidField([...asteroidField, <Asteroid key={asteroidId} id={asteroidId} x={e.clientX} y={e.clientY} />]);
	};

	return (
		<section className={styles.start} onClick={handleClick}>
			<section className={styles.start_inner}>

				<div className={styles.plus_wrapper}>
					<Image className={styles.plus} src='/images/plus.png' width={950} height={1050} alt='' />
				</div>
				<div className={styles.plus_wrapper_b}>
					<Image className={styles.plus_b} src='/images/plus.png' width={950 / 2} height={1050 / 2} alt='' />
				</div>

				{asteroidField}
				<h1 style={{ userSelect: "none" }} className={styles.xxl_h1}>
					Make The Web Work For You
				</h1>
			</section>
			<TouchIcon />
		</section>
	);
};

export default Start;
