
import Link from "next/link";
import styles from "@styles/nav.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavLinks = () => {

  return (
    <>
      <Link className={styles.nav_btn} href="/products">
        <span>Products <ArrowDropDownIcon/></span>
      </Link>
      <Link className={styles.nav_btn} href="/support">
        <span>Support</span>
      </Link>
      <Link className={styles.nav_btn} href="/contact">
        <span>Contact</span>
      </Link>
    </>
  );
};

export default NavLinks;
