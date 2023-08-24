import Link from "next/link";
import Burger from "@components/NavBar/Burger";
import Logo from "@components/NavBar/Logo";
import styles from "@styles/nav.module.scss";
import { nunito } from "../../app/fonts";
import UserLogin from "./UserLogin";
import NavLinks from "@components/NavBar/NavLinks";
import ScrollWatcher from "./ScrollWatcher";

const Nav = () => {
  return (
    <nav className={`${styles.nav} ${nunito.className}`}>
      <div className={styles.nav_left}>
        <Link href="/">{<Logo fill={'var(--nav-logo-color)'}/>}</Link>
      </div>
      <div className={styles.nav_center}>
        <NavLinks/>
      </div>
      <div className={styles.nav_right}>
        <UserLogin />
        {/* <Burger /> */}
      </div>
      <ScrollWatcher />
    </nav>
  );
};

export default Nav;
