"use client";
import Joomla from "@components/Logos/Joomla";
import WordPress from "@components/Logos/WordPress";
import Basecamp from "@components/Logos/Basecamp";
import Shopify from "@components/Logos/Shopify";
import WooCommerce from "@components/Logos/WooCommerce";
import { lexend_deca, nunito } from "../../app/fonts";
import styles from "@styles/platforms.module.scss";
import { useAnimate, useInView, stagger } from 'framer-motion';
import { use, useEffect, useRef } from 'react';

const Platforms = (props) => {

	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { amount: 0.75 });

	useEffect(() => {
		if (isInView) {
			const doAnimate = async () => {
				await animate(
					scope.current,
					{ opacity: 1, transform: 'translateX(0)' },
					{ duration: 0.3, ease: 'easeInOut' }
				);
				await animate(
					'svg',
					{ opacity: 1, transform: 'scale(1)' },
					{ duration: 0.3, delay: stagger(0.1), type: 'spring', stiffness: 200 }
				);
			};
			doAnimate();
		}
	}, [isInView]);
	return (
		<section ref={scope} className={styles.platforms}>
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
					}}>
					<h5 style={{ color: "var(--pink)" }}>Platforms</h5>
					<h2 style={{ color: "#fff" }} className={`${lexend_deca.className}`}>
						Platforms we build solutions for
					</h2>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						gridRow: "2",
						gridColumn: "1 /span 3",
						background: "#ffffff12",
						padding: "40px",
						borderRadius: "20px",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
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
						}}>
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
						}}>
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
						}}>
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
						}}>
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
