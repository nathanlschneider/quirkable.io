import Home from "@components/sections/Home";
import About from "@components/sections/About";
import Platforms from "@components/sections/Platforms";
import Newsletter from "@components/sections/Newsletter";

export default function App() {
	return (
		<div style={{position: "relative", zIndex: "1", background: "linear-gradient(180deg, #6640ff 0%, #1703ff 100%)"}}>
			<Home />
			<About />
			<Platforms />
			<Newsletter />
		</div>
	);
}
