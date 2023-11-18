import Home from "@components/sections/Home";
import About from "@components/sections/About";
import Platforms from "@components/sections/Platforms";
import Newsletter from "@components/sections/Newsletter";

export default function App() {
	return (
		<div style={{position: "relative", zIndex: "1", background: "linear-gradient(189deg, #8c38fa 0%, #143572 79%, #7f22ff 100%)"}}>
			<Home />
			<About />
			<Platforms />
			{/* <Newsletter /> */}
		</div>
	);
}
