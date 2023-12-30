import ContactButton from "@components/ContactButton";
import styles from "@styles/contact.module.scss";

const Contact = () => {
	return (
		<section className={styles.contact}>
            <section className={styles.contact_inner}>
            <h3>Need some work done?<br/>Drop a message.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ex adipisci excepturi dicta laudantium quo maiores soluta distinctio, velit, odit optio nesciunt molestias vel at nisi sapiente corporis facilis porro?</p>
			<ContactButton />
            </section>
		</section>
	);
};

export default Contact;
