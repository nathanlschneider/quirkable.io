import Link from "next/link";
import Image from "next/image";
import { lexend_deca, nunito } from "../../app/fonts";
import AnimationWrapper from "@components/Loader";
import Squig from "@components/Squig";
import Hypno from "@components/Hypno";
import Hypno2 from "@components/Hypno2";
import styles from "@styles/home.module.scss";
import Shifty from "@components/Shifty";

const Home = (props) => {
	return (
		<section className={styles.home}>
			<section className={styles.home_inner}>
				<section className={styles.left_main_section}>
					<AnimationWrapper>
						<h1 className={`${styles.center_grid_content} ${lexend_deca.className} ${styles.fade_in}`}>
							Quirkable is here to help make the web
							<br />
							work for{" "}
							<span style={{ position: "relative" }}>
								you.
								<span style={{ position: "absolute", bottom: "-5px", left: "0", zIndex: "-1" }}>
									<Squig />
								</span>
							</span>
						</h1>
						<h4 className={nunito.className} style={{ gridRow: "3", marginTop: "30px", maxWidth: "480px" }}>
							Empowering small business to convert clicks to clients with our eCommerce, CMS and SaaS
							add-on solutions.
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
					</AnimationWrapper>
					{/* <Hypno className={styles.svg} style={{ left: "-275px", top: "-200px" }} /> */}
				</section>
				<Shifty className={styles.shifty} />
				<section className={styles.right_main_section}>
					<AnimationWrapper>
						<Image
							className={styles.center_grid_content}
							src='/images/workstation.png'
							priority={true}
							width={900}
							height={1009}
							alt={"Quirkable Labs"}
						/>
					</AnimationWrapper>
					{/* <Hypno2 className={styles.svg} style={{ top: "-130px" }} /> */}
				</section>
			</section>
		</section>
	);
};

export default Home;
