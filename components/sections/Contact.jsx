import ContactButton from "@components/ContactButton";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/contact.module.scss";
import { lexend_deca } from "../../app/fonts";

const Contact = () => {
  return (
    <article id="contact" className={styles.contact}>
      <div className="pre_title">Contact</div>
      <section className={styles.contact_inner}>
        <Image className={styles.astro_mail} src="/images/mail.png" width={300} height={300} alt="" />
        <div>
          <header>
            <h2 className={lexend_deca.className}>
              Need some work done?
              <br />
              Drop a message.
            </h2>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex adipisci excepturi dicta laudantium quo maiores soluta distinctio, velit, odit optio nesciunt molestias vel at nisi sapiente corporis facilis porro?</p>
        </div>
        <div style={{ display: "flex" }}>
          <ContactButton />
          <Link className="btn" href="/support">
            Support
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Contact;
