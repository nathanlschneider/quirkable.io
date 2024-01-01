import styles from "@styles/about.module.scss";
import Image from "next/image";
const About = (props) => {
	return (
		<section className={styles.about}>
			<h1>Welcome Aboard</h1>

			<section className={styles.about_inner}>
				<div className={styles.about_inner_left}>
					<Image  className={styles.aboard} src='/images/aboard.png' width={600} height={600} alt='' />
				</div>
				<div className={styles.about_inner_right}>
					<article className={styles.quote}>
						<div className={styles.quote_title}>quir·ka·ble</div>
						<div className={styles.quote_pronun} id='pronunciation'>
							<p>/kwɜːrkəbl/</p>
						</div>
						<ol className={styles.quote_list}>
							<li>
								<strong>Adjective</strong>
								<p>Capable of embracing and adapting to unique or unconventional qualities.</p>
								<em>
									The quirkable software effortlessly accommodated the diverse needs of its users.
								</em>
							</li>
							<li>
								<p>
									Pertaining to a quality or feature that is distinctive, peculiar, or characterized
									by individuality.
								</p>
								<em>
									The quirkable design of the product set it apart in a market saturated with standard
									offerings.
								</em>
							</li>
						</ol>
					</article>
				</div>
			</section>
		</section>
	);
};

export default About;
