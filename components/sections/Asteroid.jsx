"use client";
import Image from "next/image";
import styles from "@styles/start.module.scss";

const Asteroid = (props) => {
	const { id, width, height, zIndex, x, y } = props;
	const randomCoords = () => {
		const obj = {};

		if (window) {
			obj.x = Math.floor(Math.random() * window.innerWidth);
			obj.y = Math.floor(Math.random() * window.innerHeight);
		}
		return obj;
	};

	const randomSize = () => Math.floor(Math.random() * 150);

	const pairSize = randomSize();

	return (
		<div
            className={styles.cube_wrapper}
			style={{
				left: `${x ? x : randomCoords().x}px`,
				top: `${y ? y : randomCoords().y}px`,
				zIndex: `${id}`,
				filter: `blur(${id < 4 ? 3 : 0}px)`,
			}}
		>
			<Image id={id} className={styles.cube} src='/images/cube.png' width={pairSize} height={pairSize} alt='' />
		</div>
	);
};

export default Asteroid;
