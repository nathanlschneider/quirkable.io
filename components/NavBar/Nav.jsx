import Link from "next/link";
import Burger from "@components/NavBar/Burger";
import StripeLogo from "@components/NavBar/StripeLogo";
import styles from "@styles/nav.module.scss";
import UserLogin from "./UserLogin";
import NavLinks from "@components/NavBar/NavLinks";
import ScrollWatcher from "./ScrollWatcher";

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav_left}>
				<Link href='/' className={styles.logo}>
					<StripeLogo className={styles.logo_image} />
					<div className={styles.logo_title}>Quirkable</div>
				</Link>
			</div>
			<div className={styles.nav_right}>
				<NavLinks />
				<UserLogin />
			</div>
			<ScrollWatcher/>
		</nav>
	);
};

export default Nav;
