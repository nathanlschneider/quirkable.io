import Home from "@components/sections/Home";
import About from "@components/sections/About";
import Platforms from "@components/sections/Platforms";
import Newsletter from "@components/sections/Newsletter";

export default function App() {
	return (
		<div style={{position: "relative", zIndex: "1", background: "linear-gradient(180deg, var(--light-gradient) 0%, var(--dark-gradient) 100%)"}}>
			<Home />
			<About />
			<Platforms />
			<Newsletter />
		</div>
	);
}
