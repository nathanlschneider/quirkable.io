'use client';
import { useState } from "react";
import styles from "@styles/panels.module.scss";
import Image from "next/image";
import { lexend_deca, nunito } from "../../app/fonts";

const Panels = () => {
	const [selected, setSelected] = useState(0);

	const handleSelected = (e) => {
		if (typeof e.target.attributes.dataCard.value !== 'undefined') {
			setSelected(e.target.attributes.dataCard.value);
		}
	}

	return (
		<section className={styles.panels}>
			<section className={styles.panels_inner}>
				<div className={styles.header}>
					<h2>
						Info &<br />
						Services
					</h2>
				</div>
				<aside className={styles.aside}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis explicabo quis ab
					doloribus in quos esse pariatur, modi repellat impedit eius asperiores, alias voluptatem ipsam quasi
					dolorem officiis fuga.
				</aside>
				<Image className={styles.cube} src='/images/cube.png' width={600} height={600} alt='' />
				<Image className={styles.cube2} src='/images/cube.png' width={600/2} height={600/2} alt='' />
				<Image className={styles.cube3} src='/images/cube.png' width={600/3} height={600/3} alt='' />

				<div className={styles.cards}>
					<div datacard="1" onMouseOver={handleSelected} className={`${styles.card}`}>
						<h2 style={{pointerEvents: "none"}}>Plugins & Addons</h2>
						<div className={styles.card_content}>
							Enhance your CMS and eCommerce platforms with our versatile plugins and addons. Seamlessly
							integrate functionalities, optimize workflows, and elevate user experiences.
						</div>
					</div>
					<div datacard="2" onMouseOver={handleSelected} className={styles.card}>
						<h2 style={{pointerEvents: "none"}}>SaaS Solutions</h2>
						<div className={styles.card_content}>
							Tailored for B2B, our MicroSaaS solutions are the engine driving digital innovation. Empower
							developers and businesses with scalable, efficient, and customized tools for success.
						</div>
					</div>
					<div datacard="3" onMouseOver={handleSelected} className={styles.card}>
						<h2 style={{pointerEvents: "none"}}>Developer-Focused</h2>
						<div className={styles.card_content}>
							Our products are designed with developers in mind. Unlock the full potential of your
							projects with Quirkable.io, where coding meets creativity for unparalleled digital
							solutions.
						</div>
					</div>
					<div datacard="4" onMouseOver={handleSelected} className={styles.card}>
						<h2 style={{pointerEvents: "none"}}>Developer-Focused</h2>
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
