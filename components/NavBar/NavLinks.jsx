import Link from "next/link";
import styles from "@styles/nav.module.scss";

const NavLinks = (props) => {
	return (
		<>
			<Link className={styles.nav_btn} href='/products'>
				<span>products</span>
			</Link>
			<Link className={styles.nav_btn} href='/support'>
				<span>support</span>
			</Link>
			<div className={styles.nav_btn} onClick={props}>
				<span>contact</span>
			</div>
		</>
	);
};

export default NavLinks;
