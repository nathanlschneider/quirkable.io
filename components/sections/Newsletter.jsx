import Hypno from "@components/Hypno";
import EmailForm from "@components/EmailForm";
import styles from "@styles/newsletter.module.scss";
import { lexend_deca, nunito } from "../../app/fonts";

const Newsletter = (props) => {
	return (
		<section className={styles.newsletter}>
			<section className={`${styles.newsletter_inner} ${nunito.className}`}>
				<h2 className={`${lexend_deca.className}`}>Stay in the loop</h2>
				<p>
					Get the latest on updates and new releases.
					<br />
					Straight to your inbox.
				</p>
				<EmailForm />
				<Hypno className={styles.contact_hypno} />
			</section>
		</section>
	);
};

export default Newsletter;
