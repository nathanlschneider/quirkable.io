import Lego from "./Lego";
import { motion } from "framer-motion";
import styles from "@styles/slide.module.scss";
const Slider = (props) => {
	return (
		<div className={styles.slider}>
			<Lego />
			<Lego />
			<Lego />
		</div>
	);
};

export default Slider;
