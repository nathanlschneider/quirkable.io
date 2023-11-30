'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "@styles/start.module.scss";
import Asteroid from "./Asteroid";
import CustomMousePointer from '@components/MousePointer';

const Start = (props) => {

	const [asteroidId, setAsteroidId] = useState(0);
	const [asteroidField, setAsteroidField] = useState([])

	const handleClick = (e) => {
		console.log(e)
		setAsteroidId(asteroidId + 1);
		setAsteroidField([...asteroidField, <Asteroid key={asteroidId} id={asteroidId} x={e.clientX} y={e.clientY}/>]);
	}

	return (
		<section className={styles.start} onClick={handleClick}>
			<section className={styles.start_inner}>
			<CustomMousePointer />

				<div className={styles.plus_wrapper}>
					<Image className={styles.plus} src='/images/plus.png' width={950} height={1050} alt='' />
				</div>
				<div className={styles.plus_wrapper_b}>
					<Image className={styles.plus_b} src='/images/plus.png' width={950/2} height={1050/2} alt='' />
				</div>			
				{asteroidField}
				<h1 style={{userSelect: 'none'}} className={styles.xxl_h1}>Make The Web Work For You</h1>
			</section>
		</section>
	);
};

export default Start;
