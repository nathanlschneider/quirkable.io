import Link from "next/link";
import StripeLogo from "./StripeLogo";
import styles from "@styles/nav.module.scss";
const LinkedLogo = (props) => {
  return (
    <>
      <Link href="/" className={styles.logo}>
        <StripeLogo className={styles.logo_image} />
        <div className={styles.logo_title}>Quirkable</div>
      </Link>
    </>
  );
};

export default LinkedLogo;
