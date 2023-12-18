"use client";
import styles from "@styles/pagecontent.module.scss";
import Joomla from "@components/Logos/Joomla";
import WordPress from "@components/Logos/WordPress";
import { motion } from "framer-motion";

const PageContent = () => {
	return (
		<section className={styles.pagecontent}>
      <nav className={styles.nav}>
			<h2>Plugins</h2>
      <div className={styles.platform_group}>
        <Joomla width={100} height={100} viewbox={'0 0 100 100'}/>
        <WordPress/>
      </div>
      </nav>
      <hr/>
		</section>
	);
};

export default PageContent;
