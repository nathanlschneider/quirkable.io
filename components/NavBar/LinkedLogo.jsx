import Link from "next/link";
import StripeLogo from "./StripeLogo";
import styles from "@styles/nav.module.scss";
const LinkedLogo = (props) => {
	return (
		<>
			<Link href='/' className={styles.logo}>
				<StripeLogo style={{fill: `${props.fill}`}} className={styles.logo_image} />
				<div style={{color: `${props.color}`}} className={styles.logo_title}>Quirkable</div>
			</Link>
		</>
	);
};

export default LinkedLogo
