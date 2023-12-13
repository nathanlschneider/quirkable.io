"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@styles/start.module.scss";

const Asteroid = (props) => {
	const { id, x, y, width, height } = props;
	const [duration] = useState(Math.floor(Math.random() * (500 - 10) + 10));
	const [style, setStyle] = useState({ opacity: "0", scale: "0" });

	useEffect(() => {
		setStyle({ opacity: "1", scale: "1" });
	}, []);

	const randomCoords = () => {
		const obj = {};

		if (typeof window !== "undefined") {
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
				transformOrigin: 'center',
				left: `${x ? x - 260 : randomCoords().x}px`,
				top: `${y ? y - 100: randomCoords().y}px`,
				zIndex: `${pairSize}`,
				filter: `blur(${pairSize < 100 ? 3 : 0}px)`,
				animationDuration: `${duration}s`,
			}}>
			<Image
				id={`particle${id}`}
				style={style}
				className={styles.cube}
				src='/images/cube.png'
				width={width ? width : pairSize}
				height={height ? height : pairSize}
				alt=''
			/>
		</div>
	);
};

export default Asteroid;
