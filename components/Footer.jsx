import styles from "@styles/footer.module.scss";
import LinkedLogo from "./NavBar/LinkedLogo";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content_wrapper}>
        <div style={{display: "grid", gridTemplateRows: "75px 25px"}}>
          <LinkedLogo fill={'#fff'} color={'#fff'}/>
          <p>Built with Next.js</p>
          <p style={{fontSize: "12px"}}>© 2024 Quirkable. All Rights Reserved.</p>
        </div>

        <div className={styles.footer_links}>
          <h5 className={styles.menu_header}>Products</h5>
          <ul>
            <Link href={""}>Extentions</Link>
            <Link href={""}>Catgeories</Link>
          </ul>
        </div>
        <div className={styles.footer_links}>
          <h5 className={styles.menu_header}>Support</h5>
          <ul>
            <Link href={""}>Contact</Link>
            <Link href={""}>Submit Ticket</Link>
            <Link href={""}>Forum</Link>
          </ul>
        </div>
        <div className={styles.footer_links}>
          <h5 className={styles.menu_header}>Company</h5>
          <ul>
            <Link href={'/about'}>About</Link>
            <Link href={""}>Terms & Conditions</Link>
            <Link href={""}>Privacy Policy</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
