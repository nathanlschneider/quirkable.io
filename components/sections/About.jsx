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
				<article className={styles.quote}>
					<div className={styles.quote_title}>quir·ka·ble</div>
					<div className={styles.quote_pronun} id='pronunciation'>
						<p>/kwɜːrkəbl/</p>
					</div>
					<ol className={styles.quote_list}>
						<li>
							<strong>Adjective</strong>
							<p>Capable of embracing and adapting to unique or unconventional qualities.</p>
							<em>The quirkable software effortlessly accommodated the diverse needs of its users.</em>
						</li>
						<li>
							<p>
								Pertaining to a quality or feature that is distinctive, peculiar, or characterized by
								individuality.
							</p>
							<em>
								The quirkable design of the product set it apart in a market saturated with standard
								offerings.
							</em>
						</li>
					</ol>
				</article>
				<Image className={styles.cube} src='/images/wheel.webp' width={600} height={600} alt='' />
			</section>
		</section>
	);
};

export default About;
