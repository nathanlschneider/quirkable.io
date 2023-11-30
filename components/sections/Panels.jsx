import styles from "@styles/panels.module.scss";
import { lexend_deca, nunito } from "../../app/fonts";


const Panels = () => {
	return (
		<section className={styles.panels}>
			<section className={styles.panel_inner}>
            <h5 style={{ color: "var(--pink)" }}>APPS</h5>
					<h1 style={{ color: "#fff", fontSize: "46px" }} className={`${lexend_deca.className}`}>
						Platforms we build solutions for
					</h1>
                <div class="cards">
				<div class='card'>
					<h2>🔗 Plugins & Addons</h2>
					Enhance your CMS and eCommerce platforms with our versatile plugins and addons. Seamlessly integrate
					functionalities, optimize workflows, and elevate user experiences.
				</div>
				<div class='card'>
					<h2> 🚀 MicroSaaS Solutions</h2>
					Tailored for B2B, our MicroSaaS solutions are the engine driving digital innovation. Empower
					developers and businesses with scalable, efficient, and customized tools for success.
				</div>
				<div class='card'>
					<h2>🌐 Developer-Focused</h2>
					Our products are designed with developers in mind. Unlock the full potential of your projects with
					Quirkable.io, where coding meets creativity for unparalleled digital solutions.
				</div>
                </div>
			</section>
		</section>
	);
};

export default Panels;
