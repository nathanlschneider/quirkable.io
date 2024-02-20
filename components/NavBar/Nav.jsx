'use client';
import Burger from "@components/NavBar/Burger";
import styles from "@styles/nav.module.scss";
import NavLinks from "@components/NavBar/NavLinks";
import LinkedLogo from "@components/NavBar/LinkedLogo";

const Nav = (props) => {
	return (
		<nav className={styles.nav}>
			<div className={styles.nav_left}>
				<LinkedLogo color={props.color}/>
			</div>
			<div className={styles.nav_right}>
				<NavLinks />
	
			</div>
		</nav>
	);
};

export default Nav;
