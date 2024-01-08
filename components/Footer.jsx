import styles from '@styles/footer.module.scss';
import EmailForm from '@components/EmailForm';
import LinkedLogo from './NavBar/LinkedLogo';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_content_wrapper}>
				<div style={{ display: 'grid', gridTemplateRows: '75px 25px' }}>
					<LinkedLogo fill={'#fff'} color={'#fff'} />
					<p>Built with Next.js</p>
					<p style={{ fontSize: '12px'}}>© 2024 Quirkable. All Rights Reserved.</p>
				</div>

				<div className={styles.footer_links}>
					<ul>
						<Link href={''}>Extentions</Link>
						<Link href={''}>Catgeories</Link>
						<Link href={''}>Contact</Link>
						<Link href={''}>Submit Ticket</Link>
						<Link href={''}>Forum</Link>
						<Link href={'/about'}>About</Link>
						<Link href={''}>Terms & Conditions</Link>
						<Link href={''}>Privacy Policy</Link>
					</ul>
				</div>
				<aside className={styles.footer_newsletter}>
					<h2>Stay in the loop</h2>
					<p>
						Get the latest on updates and new releases.
						<br />
						Straight to your inbox.
					</p>
					<EmailForm />
				</aside>
			</div>
		</footer>
	);
};

export default Footer;
