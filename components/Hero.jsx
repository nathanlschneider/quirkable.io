"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "@styles/hero.module.scss";

const Hero = () => {
	const wordRef_0 = useRef();
	const wordRef_1 = useRef();
	const wordRef_2 = useRef();
	const wordRef_3 = useRef();
	const wordRef_4 = useRef();
	const wordRef_5 = useRef();

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
		hidden: { opacity: 0, y: -80 },
		show: {
			opacity: [0, 1, 1, 1, 0],
			y: [-80, 0, 0, 0, 80],
			transition: {
				duration: 4,
				ease: "linear",
				times: [0, 0.1, 0.5, 0.9, 1],
				repeat: Infinity,
				repeatDelay: 2,
			},
		},
	};

	const heroPhrases = Array(
		["The", "Web", "Is", "A", "Strange", "Place..."],
		["We'll", "Navigate", "You", "to", "success!"],
		["Scroll", "Down", "To", "Find", "Out", "More"]
	);

	useEffect(() => {
		let counter = 0;
		wordRef_0.current.innerHTML = `Hi 🌈`;

		setInterval(() => {
			wordRef_0.current.innerHTML = `${
				typeof heroPhrases[counter][0] !== "undefined" ? heroPhrases[counter][0] : ""
			}`;
			wordRef_1.current.innerHTML = `${
				typeof heroPhrases[counter][1] !== "undefined" ? heroPhrases[counter][1] : ""
			}`;
			wordRef_2.current.innerHTML = `${
				typeof heroPhrases[counter][2] !== "undefined" ? heroPhrases[counter][2] : ""
			}`;
			wordRef_3.current.innerHTML = `${
				typeof heroPhrases[counter][3] !== "undefined" ? heroPhrases[counter][3] : ""
			}`;
			wordRef_4.current.innerHTML = `${
				typeof heroPhrases[counter][4] !== "undefined" ? heroPhrases[counter][4] : ""
			}`;
			wordRef_5.current.innerHTML = `${
				typeof heroPhrases[counter][5] !== "undefined" ? heroPhrases[counter][5] : ""
			}`;

			counter++;
			if (counter === heroPhrases.length) {
				counter = 0;
			}
		}, 6000);
	}, []);

	return (
		<motion.h1 variants={container} initial='hidden' animate='show' exit='exit' className={styles.xxl_h1}>
			<motion.div ref={wordRef_0} key='0' variants={item} />
			<motion.div ref={wordRef_1} key='1' variants={item} />
			<motion.div ref={wordRef_2} key='2' variants={item} />
			<motion.div ref={wordRef_3} key='3' variants={item} />
			<motion.div ref={wordRef_4} key='4' variants={item} />
			<motion.div ref={wordRef_5} key='5' variants={item} />
		</motion.h1>
	);
};

export default Hero;
