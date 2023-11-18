import Joomla from "@components/Logos/Joomla";
import WordPress from "@components/Logos/WordPress";
import Basecamp from "@components/Logos/Basecamp";
import Shopify from "@components/Logos/Shopify";
import WooCommerce from "@components/Logos/WooCommerce";
import Shifter from "@components/Shifter";
import { lexend_deca, nunito } from "../../app/fonts";
import styles from "@styles/platforms.module.scss";

const Platforms = (props) => {
	return (
		<section className={styles.platforms}>
			<section className={styles.platforms_inner}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						paddingBottom: "30px",
						justifyContent: "center",
						gridRow: "1",
						gridColumn: "1 /span 3",
						flexDirection: "column",
						gap: "20px 40px",
					}}
				>
					<h5 style={{ color: "var(--pink)" }}>APPS</h5>
					<h1 style={{ color: "#fff", fontSize: "46px" }} className={`${lexend_deca.className}`}>
						Platforms we build solutions for
					</h1>
				</div>
				<Shifter className={styles.shifter} />
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						gridRow: "2",
						gridColumn: "1 /span 3",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Joomla width={128} height={128} viewBox={"0 0 32 32"} />
						<h3 style={{ color: "#fff)", fontSize: "24px" }} className={`${nunito.className}`}>
							Joomla
						</h3>
						<p style={{ fontSize: "14px" }} className={`${nunito.className}`}>
							Custom Joomla Extensions
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<WordPress width={128} height={128} viewBox={"0 0 32 32"} />
						<h3 style={{ fontSize: "24px" }} className={`${nunito.className}`}>
							WordPress
						</h3>
						<p style={{ fontSize: "14px" }} className={`${nunito.className}`}>
							Custom WordPress Plugins
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Basecamp width={128} height={128} viewBox={"0 0 32 32"} />
						<h3 style={{ fontSize: "24px" }} className={`${nunito.className}`}>
							Basecamp
						</h3>
						<p style={{ fontSize: "14px" }} className={`${nunito.className}`}>
							Custom Basecamp Apps
						</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Shopify width={128} height={128} viewBox={"0 0 32 32"} />
						<h3 style={{ fontSize: "24px" }} className={`${nunito.className}`}>
							Shopify
						</h3>
						<p style={{ fontSize: "14px" }} className={`${nunito.className}`}>
							Custom Shopify Apps
						</p>
					</div>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<WooCommerce width={128} height={128} />
						<h3 style={{ fontSize: "24px" }} className={`${nunito.className}`}>
							WooCommerce
						</h3>
						<p style={{ fontSize: "14px" }} className={`${nunito.className}`}>
							Custom WooCommerce Plugins
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Platforms;
