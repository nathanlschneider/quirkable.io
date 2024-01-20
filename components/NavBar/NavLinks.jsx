import Link from "next/link";
import styles from "@styles/nav.module.scss";

const NavLinks = (props) => {
	return (
		<>
			<Link className={styles.nav_btn} href='/products'>
				<span>Products</span>
			</Link>
			<Link className={styles.nav_btn} href='/support'>
				<span>Support</span>
			</Link>
			<Link className={styles.nav_btn} href='#contact'>
				<span>Contact</span>
			</Link>
		</>
	);
};

export default NavLinks;
