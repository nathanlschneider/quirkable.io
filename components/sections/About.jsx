import Prism from "@components/Prism";
import styles from "@styles/about.module.scss";
import { lexend_deca, nunito } from "../../app/fonts";
import Curve from "@components/Curve";
import Image from "next/image";

const About = (props) => {
	return (
		<section className={styles.about}>
			{/* <Curve/> */}
			<section className={styles.about_inner}>
			<h2 className={styles.h2}>Stuff You Need To Know.</h2>
			<div className={styles.body_a}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sunt laborum molestiae soluta esse provident, modi, dolorem dolore tenetur minus, eos officiis voluptatibus animi voluptas facilis ipsam in officia ducimus!</div>
			<div className={styles.body_b}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sunt laborum molestiae soluta esse provident, modi, dolorem dolore tenetur minus, eos officiis voluptatibus animi voluptas facilis ipsam in officia ducimus!</div>
			<div className={styles.body_c}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sunt laborum molestiae soluta esse provident, modi, dolorem dolore tenetur minus, eos officiis voluptatibus animi voluptas facilis ipsam in officia ducimus!</div>
			<div className={styles.body_d}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam sunt laborum molestiae soluta esse provident, modi, dolorem dolore tenetur minus, eos officiis voluptatibus animi voluptas facilis ipsam in officia ducimus!</div>
			<Image className={styles.cube} src='/images/cube.png' width={600} height={600} alt='' />

			</section>
		</section>
	);
};

export default About;
