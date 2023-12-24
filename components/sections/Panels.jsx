"use client";
import styles from "@styles/panels.module.scss";
import Image from "next/image";

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
				<aside className={styles.aside}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis explicabo quis ab
					doloribus in quos esse pariatur, modi repellat impedit eius asperiores, alias voluptatem ipsam quasi
					dolorem officiis fuga.
				</aside>
				<Image className={styles.cube} src='/images/cube.png' width={600} height={600} alt='' />
				<Image className={styles.cube2} src='/images/cube.png' width={600 / 2} height={600 / 2} alt='' />
				<Image className={styles.cube3} src='/images/cube.png' width={600 / 3} height={600 / 3} alt='' />
				
			</section>
		</section>
	);
};

export default Panels;
