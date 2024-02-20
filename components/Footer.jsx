import styles from "@styles/footer.module.scss";
import EmailForm from "@components/EmailForm";
import LinkedLogo from "./NavBar/LinkedLogo";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content_wrapper}>
        <div className={styles.leftgroup}>
          <LinkedLogo fill={"#fff"} color={"#fff"} />
          {/* <div className={styles.small_links}>
            <p>© 2024 Quirkable. All Rights Reserved.</p>
            <Link href={"/tos"}>Terms & Conditions</Link>
            <Link href={"/privacy"}>Privacy Policy</Link>
            <Link href={""}>Sitemap</Link>
          </div> */}
        </div>
        {/* 
        <div className={styles.footer_links}>
          <ul>
            <Link href={"/products"}>Products</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/ticket"}>Submit Ticket</Link>
            <Link href={""}>Forum</Link>
            <Link href={"/about"}>About</Link>
          </ul>
        </div> */}
        <aside className={styles.footer_newsletter} style={{border: "4px solid", padding: "20px 40px", borderRadius: "80px"}}>
          <h2>Stay in the loop</h2>
          <div >
            <p>Get the latest on updates and new releases.</p>
            <EmailForm />
          </div>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
