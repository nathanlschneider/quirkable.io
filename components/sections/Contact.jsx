import ContactButton from "@components/ContactButton";
import Image from "next/image";
import styles from "@styles/contact.module.scss";
import { lexend_deca } from "../../app/fonts";

const Contact = () => {
	return (
		<section id='contact' style={{ height: "100dvh" }} className={styles.contact}>
								<h5>Contact</h5>

			<section className={styles.contact_inner}>
				<Image className={styles.astro_mail} src='/images/mail.png' width={400} height={400} alt='' />
				<div>
					<h2 className={lexend_deca.className}>
						Need some work done?
						<br />
						Drop a message.
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex adipisci excepturi dicta
						laudantium quo maiores soluta distinctio, velit, odit optio nesciunt molestias vel at nisi
						sapiente corporis facilis porro?
					</p>
				</div>
				<ContactButton />

			</section>

		</section>
	);
};

export default Contact;
