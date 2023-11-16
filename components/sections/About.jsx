import Wave from "@components/Wave";
import Prism from "@components/Prism";
import styles from "@styles/about.module.scss";
import { lexend_deca, nunito } from "../../app/fonts";

const About = (props) => {
	return (
		<section className={styles.about}>
			<section className={styles.about_inner}>
				<h5>ABOUT</h5>
				<h1 style={{ color: "var(--deep-purple)", fontSize: "46px" }} className={`${lexend_deca.className}`}>
					Let us help solve your problems
				</h1>
				<h4 style={{ color: "#000" }}>
					Our mission is to create quality software that exceeds our clients' expectations by utilizing
					industry-leading coding standards and up-to-date web development technologies. We strive to build
					long-lasting partnerships with our clients by delivering reliable software solutions that are
					scalable, secure, and user-friendly.
					<br />
					<br /> Our team of experienced developers is committed to providing exceptional customer service and
					making sure our clients' needs are met. With a focus on quality code, we deliver software solutions
					that not only meet current expectations but also exceed them for years to come. We believe in
					staying ahead of the curve and continually improving our skills to deliver cutting-edge software
					solutions for our clients.
				</h4>
				<Prism className={styles.prism} />
				<div className={styles.wave}>
					<Wave />
				</div>
			</section>
		</section>
	);
};

export default About;
