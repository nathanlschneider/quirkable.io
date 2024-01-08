import Start from "@components/sections/Start";
import About from "@components/sections/About";
import Newsletter from "@components/sections/Newsletter";
import Panels from "@components/sections/Panels";
import Platforms from "@components/sections/Platforms";
import Slosh from "@components/Slosh";
import ThreeCards from "@components/sections/ThreeCards";
import WordScroller from "@components/WordScroller";
import Contact from "@components/sections/Contact";
import SectionWrapper from "@components/sections/SectionWrapper";
export default function App() {
	return (
		<>
			<Start showHero={true} />
			<SectionWrapper>
				<About />
				<ThreeCards />
				{/* <WordScroller /> */}
				<Platforms />
				<Panels />
				<Contact />
				{/* <Slosh /> */}
				{/* <Newsletter /> */}

			</SectionWrapper>
		</>
	);
}
