import Start from "@components/sections/Start";
import PageContent from "@components/sections/PageContent";
import styles from "@styles/pagecontent.module.scss";
export default function App() {
	return (
		<>
			<Start style={{height: '25vh', position: 'relative', top: 'unset'}} showHero={false} />
            <h1 className={styles.h1}>Products</h1>
		</>
	);
}
