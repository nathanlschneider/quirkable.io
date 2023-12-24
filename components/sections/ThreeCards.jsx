import styles from "@styles/threecards.module.scss";
import Image from "next/image";
const ThreeCards = (props) => {
	return (
		<section className={styles.threecards}>
			<section className={styles.threecards_inner}>
			<h2>We launch visionary ideas,<br/>propelling you towards the future.</h2>

				<div className={styles.cards}>
					<div className={styles.card}>
						<Image src='/images/puzzle.webp' width={200} height={200} alt='Puzzle Piece' />
						<div className={styles.card_content}>
							<h3>Plugins & Addons</h3>
							<p>
								Enhance your CMS and eCommerce platforms with our versatile plugins and addons.
								Seamlessly integrate functionalities, optimize workflows, and elevate user experiences.
							</p>
							<div className={`${styles.card_btn} btn`}>Read More</div>
						</div>
					</div>
					<div className={styles.card}>
						<Image src='/images/cog.webp' width={200} height={200} alt='Cog' />
						<div>
							<h3>SaaS Solutions</h3>
							<p>
								Tailored for B2B, our MicroSaaS solutions are the engine driving digital innovation.
								Empower developers and businesses with scalable, efficient, and customized tools for
								success.
							</p>
							<div className={`${styles.card_btn} btn`}>Read More</div>
						</div>
					</div>
					<div className={styles.card}>
						<Image src='/images/thumbsup.webp' width={200} height={200} alt='Thumbs Up' />
						<div className={styles.card_content}>
							<h3>Developer-Focused</h3>
							<p>
								Our products are designed with developers in mind. Unlock the full potential of your
								projects with Quirkable.io, where coding meets creativity for unparalleled digital
								solutions.
							</p>
							<div className={`${styles.card_btn} btn`}>Read More</div>
						</div>
					</div>
				</div>
				<div className={styles.rocket_wrapper}>
					<Image className={styles.rocket} src='/images/rocket.png' width={200} height={200} alt='Rocket' />
				</div>
			</section>
		</section>
	);
};

export default ThreeCards;
