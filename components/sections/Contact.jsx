import ContactButton from "@components/ContactButton";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/contact.module.scss";
import { lexend_deca } from "../../app/fonts";

const Contact = () => {
  return (
    <article id="contact" className={styles.contact}>
      <div className="pre_headline">Contact</div>
      <section className={styles.contact_inner}>
        <Image className={styles.astro_mail} src="/images/mail.png" width={300} height={300} alt="" />
        <header>
          <h2 className={lexend_deca.className}>Need some work done?</h2>
          <h3>Drop a message.</h3>
        </header>
        <section style={{ display: "flex", alignItems: "center" }}>
          <ContactButton />
          <Link className={`${styles.btn} btn`} href="/support">
            Support
          </Link>
        </section>
      </section>
    </article>
  );
};

export default Contact;
