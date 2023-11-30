import Link from "next/link";
import styles from "@styles/nav.module.scss";

const NavLinks = () => {
	return (
		<>
			<Link className={styles.nav_btn} href='/products'>
				<span>products</span>
			</Link>
			<Link className={styles.nav_btn} href='/support'>
				<span>support</span>
			</Link>
			<Link className={styles.nav_btn} href='/contact'>
				<span>contact</span>
			</Link>
		</>
	);
};

export default NavLinks;
