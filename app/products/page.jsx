import StartSecondary from "@components/sections/Start_Secondary";
import PageContent from "@components/sections/PageContent";
import Newsletter from "@components/sections/Newsletter";
import styles from "@styles/pagecontent.module.scss";
export default function App() {
	return (
		<>
			<StartSecondary style={{height: '25vh', position: 'relative', top: 'unset'}} showHero={false} />
            <h1 className={styles.h1}>Products</h1>
			<PageContent/>
			<Newsletter/>
		</>
	);
}
