"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@styles/start.module.scss";
import { motion } from "framer-motion";

const Asteroid = (props) => {
	const { id, x, y, width, height, src, alt } = props;
	const [duration] = useState(Math.floor(Math.random() * (500 - 10) + 10));
	const [destoryObject, setDestroyObject] = useState(true);
	
	const container = {
		hidden: { opacity: 0, scale: 0 },
		show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400 } },
		destroy: {scale: 0, transition: { type: "spring", stiffness: 400 }}
	};

	const handleDestoryObject = () => {
		setDestroyObject(false);
	}

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
		destoryObject && <div
			className={styles.cube_wrapper}
			style={{
				transformOrigin: "center",
				left: `${x ? x - 260 : randomCoords().x}px`,
				top: `${y ? y - 100 : randomCoords().y}px`,
				zIndex: `${pairSize}`,
				filter: src ? '0px' : `blur(${pairSize < 100 ? 3 : 0}px)`,
				animationDuration: `${duration}s`,
			}}>
			<motion.div drag className={styles.asteroidWrapper} onClick={handleDestoryObject} variants={container} initial='hidden' animate='show' exit='destroy'>
				<Image
					id={`particle${id}`}
					className={styles.cube}
					src={src ? src : '/images/cube.png'}
					width={src ? 200 : width ? width : pairSize}
					height={src ? 200 : height ? height : pairSize}
					alt={alt ? alt : 'Asteroid'}
					priority={true}
				/>
			</motion.div>
		</div>
	);
};

export default Asteroid;
