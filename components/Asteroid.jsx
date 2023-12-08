"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@styles/start.module.scss";

const Asteroid = (props) => {
	const { id, x, y, width, height } = props;

	const [duration, setDuration] = useState(400);
	const [zdex, setZdex] = useState(2);

	useEffect(() => {
		setDuration(Math.floor(Math.random() * (500 - 10) + 10));
		setZdex(Math.floor(Math.random() * (10 - 2) + 2));
	}, []);

	const randomCoords = () => {
		const obj = {};

		if (typeof window !== 'undefined') {
			obj.x = Math.floor(Math.random() * window.innerWidth);
			obj.y = Math.floor(Math.random() * window.innerHeight);
		}
		return obj;
	};

	const randomSize = () => Math.floor(Math.random() * (150 - 20) + 20);

	const pairSize = randomSize();

	return (
		<div
			className={styles.cube_wrapper}
			style={{
				left: `${x ? x - 260 : randomCoords().x}px`,
				top: `${y ? y - 75 : randomCoords().y}px`,
				zIndex: `${id}`,
				filter: `blur(${id < 4 ? 3 : 0}px)`,
				animationDuration: `${duration}s`,
			}}
		>
			<Image id={`particle${id}`} className={styles.cube} src='/images/cube.png' width={width ? width : pairSize} height={height ? height: pairSize} alt='' />
		</div>
	);
};

export default Asteroid;
