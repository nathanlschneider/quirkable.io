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
				<div className={styles.panel_wrapper}>
					<div className={styles.panel}>
						<Image src="/images/socialmedia.webp" width={60} height={60} alt=""/>
						<h3>Social Proof</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</div>
					<div className={styles.panel}>
						<Image src="/images/socialmedia.webp" width={60} height={60} alt=""/>
						<h3>Integration</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</div>
					<div className={styles.panel}>
						<Image src="/images/socialmedia.webp" width={60} height={60} alt=""/>
						<h3>Ecommerce</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</div>
					<div className={styles.panel}>
						<Image src="/images/socialmedia.webp" width={60} height={60} alt=""/>
						<h3>Customization</h3>
						<p>Produce the highest quality work and services for every client, on every project.</p>
					</div>
				</div>
				<Image className={styles.cube} src='/images/cube.png' width={600} height={600} alt='' />
				<Image className={styles.cube2} src='/images/cube.png' width={600 / 2} height={600 / 2} alt='' />
				<Image className={styles.cube3} src='/images/cube.png' width={600 / 3} height={600 / 3} alt='' />
				
			</section>
		</section>
	);
};

export default Panels;
