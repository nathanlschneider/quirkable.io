import styles from "@styles/panels.module.scss";
import { lexend_deca, nunito } from "../../app/fonts";

const Panels = () => {
	return (
		<section className={styles.panels}>
			<section className={styles.panels_inner}>
				<div className={styles.header}>
					<h2>
						Info &<br />
						Services
					</h2>
				</div>
				<div
					style={{
						textAlign: "right",
						maxWidth: "400px",
						position: "absolute",
						right: "6px",
						fontSize: "2rem",
					}}
				>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis explicabo quis ab
					doloribus in quos esse pariatur, modi repellat impedit eius asperiores, alias voluptatem ipsam quasi
					dolorem officiis fuga.
				</div>
				<div className={styles.cards}>
					<div className={styles.card}>
						<h2>Plugins & Addons</h2>
						<div className={styles.card_content}>
							Enhance your CMS and eCommerce platforms with our versatile plugins and addons. Seamlessly
							integrate functionalities, optimize workflows, and elevate user experiences.
						</div>
					</div>
					<div className={styles.card}>
						<h2>SaaS Solutions</h2>
						<div className={styles.card_content}>
							Tailored for B2B, our MicroSaaS solutions are the engine driving digital innovation. Empower
							developers and businesses with scalable, efficient, and customized tools for success.
						</div>
					</div>
					<div className={styles.card}>
						<h2>Developer-Focused</h2>
						<div className={styles.card_content}>
							Our products are designed with developers in mind. Unlock the full potential of your
							projects with Quirkable.io, where coding meets creativity for unparalleled digital
							solutions.
						</div>
					</div>
					<div className={styles.card}>
						<h2>Developer-Focused</h2>
						<div className={styles.card_content}>
							Our products are designed with developers in mind. Unlock the full potential of your
							projects with Quirkable.io, where coding meets creativity for unparalleled digital
							solutions.
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Panels;
