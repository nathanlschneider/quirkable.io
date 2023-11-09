import Image from "next/image";
import Link from "next/link";
import Hypno from "@components/Hypno";
import Hypno2 from "@components/Hypno2";
import Squig from "@components/Squig";
import styles from "@styles/home.module.scss";
import { lexend_deca, nunito } from "../app/fonts";
import Joomla from "@components/Logos/Joomla";
import WordPress from "@components/Logos/WordPress";
import Basecamp from "@components/Logos/Basecamp";
import Shopify from "@components/Logos/Shopify";
import EmailForm from "@components/EmailForm";
import FeedReader from "@components/FeedReader";
import ui from "@styles/ui.module.scss";
import WooCommerce from "@components/Logos/WooCommerce";
import AnimationWrapper from "@components/Loader";
import AltDude from "@components/AltDude";
import LogoScroller from "@components/LogoScroller";
import AppPicker from "@components/AppPicker";
import LightBulb from "@components/LightBulb";
import Wave from "@components/Wave";

export default function Home() {
	return (
		<>
			<section className={styles.content_wrapper}>
				<section className={styles.content_wrapper_inner}>
					<section className={styles.left_main_section}>
						<h1 className={`${styles.center_grid_content} ${lexend_deca.className} ${styles.fade_in}`}>
							<AnimationWrapper delay={"0"}>
								Quirkable is here to help make the web
								<br />
								work for{" "}
								<span style={{ position: "relative" }}>
									you.
									<span style={{ position: "absolute", bottom: "-5px", left: "0", zIndex: "-1" }}>
										<Squig />
									</span>
								</span>
							</AnimationWrapper>
						</h1>
						<h4 className={nunito.className} style={{ gridRow: "3", marginTop: "30px", maxWidth: "480px" }}>
							<AnimationWrapper delay={".3"}>
								Empowering small business to convert clicks to clients with our eCommerce, CMS and SaaS
								add-on solutions.
							</AnimationWrapper>
						</h4>
						<Link
							style={{
								gridRow: "4",
								color: "#fff",
								textTransform: "uppercase",
								background: "rgb(175, 23, 244)",
								height: "60px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: "var(--border-radius)",
								fontWeight: "600",
								width: "240px",
								fontSize: "1.35rem",
							}}
							className={nunito.className}
							href='/next'
						>
							Learn more
						</Link>
						<Hypno style={{ opacity: ".2", zIndex: "-1", position: "absolute", left: "-275px" }} />
					</section>
					<section className={styles.right_main_section}>
						<Image
							className={styles.center_grid_content}
							src='/images/workstation.png'
							priority={true}
							width={900}
							height={1009}
							alt={"Quirkable Labs"}
						/>
						<Hypno2 style={{ position: "absolute", zIndex: "-1", opacity: ".2", top: "-200px" }} />
					</section>
				</section>
			</section>
			<section className={styles.content_wrapper_mission_statement}>
				<section className={styles.content_wrapper_mission_statement_inner}>
					<h5>ABOUT</h5>
					<h1
						style={{ color: "var(--deep-purple)", fontSize: "46px" }}
						className={`${lexend_deca.className}`}
					>
						Let us help solve your problems
					</h1>
					<h4 style={{ color: "#000" }}>
						Our mission is to create quality software that exceeds our clients' expectations by utilizing
						industry-leading coding standards and up-to-date web development technologies. We strive to
						build long-lasting partnerships with our clients by delivering reliable software solutions that
						are scalable, secure, and user-friendly.
						<br />
						<br /> Our team of experienced developers is committed to providing exceptional customer service
						and making sure our clients' needs are met. With a focus on quality code, we deliver software
						solutions that not only meet current expectations but also exceed them for years to come. We
						believe in staying ahead of the curve and continually improving our skills to deliver
						cutting-edge software solutions for our clients.
					</h4>
				</section>
				<Wave width='100%' fill='#616af1' />
			</section>

			<section className={styles.content_wrapper_three}>
				<section className={styles.content_wrapper_three_inner}>
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
						<h5 style={{ color: "#fff" }}>APPS</h5>
						<h1 style={{ color: "#fff", fontSize: "46px" }} className={`${lexend_deca.className}`}>
							Platforms we build solutions for
						</h1>
					</div>
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
			<section className={styles.content_wrapper_two}>
				<section className={styles.content_wrapper_two_inner}>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							paddingBottom: "30px",
							justifyContent: "space-between",
							gridRow: "2",
							gridColumn: "1 /span 3",
							borderBottom: "2px solid var(--deep-purple)",
						}}
					>
						<h1
							style={{ color: "var(--deep-purple)", fontSize: "46px" }}
							className={`${lexend_deca.className}`}
						>
							Apps/Extentions
						</h1>
						<Link
							className={`${nunito.className} ${styles.btn} ${ui.btn} ${ui.btn_medium}`}
							style={{ maxWidth: "180px" }}
							href='/next'
						>
							All Products
						</Link>
					</div>
					<span style={{ gridColumn: "1", gridRow: "3" }}>
						<FeedReader />
					</span>
				</section>
			</section>
			<section className={styles.content_wrapper_four}>
				<section className={`${styles.content_wrapper_four_inner} ${nunito.className}`}>
					<h2 className={`${lexend_deca.className}`}>Stay in the loop</h2>
					<p>
						Get the latest on updates and new releases.
						<br />
						Straight to your inbox.
					</p>
					<EmailForm />
					<Hypno className={styles.contact_hypno} />
				</section>
			</section>
			<section className={styles.content_wrapper_five}>
				<section className={`${styles.content_wrapper_five_inner} ${nunito.className}`}></section>
			</section>
			{/* <LogoScroller /> */}
		</>
	);
}
