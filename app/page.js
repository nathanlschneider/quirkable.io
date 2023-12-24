import Start from "@components/sections/Start";
import About from "@components/sections/About";
import Newsletter from "@components/sections/Newsletter";
import Panels from "@components/sections/Panels";
import Platforms from "@components/sections/Platforms";
import Slosh from "@components/Slosh";
import Bumps from "@components/Bumps";
import styles from "@styles/page.module.scss";
import ThreeCards from "@components/sections/ThreeCards";

export default function App() {
	return (
		<>
			<Start showHero={true} />
			<div className={styles.page} style={{position: "relative", zIndex: 9, background: "linear-gradient(36deg, #0a0335 10%, #3f20ad 49%, #cb00f4 97%)"}}>
			<About />
			<Newsletter/>

			<ThreeCards/>

			{/* <Panels/> */}
			<Slosh/>

			{/* <Platforms/> */}

			</div>
		</>
	);
}
