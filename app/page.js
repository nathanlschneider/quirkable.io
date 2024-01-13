import Start from "@components/sections/Start";
import About from "@components/sections/About";
import Panels from "@components/sections/Panels";
import Platforms from "@components/sections/Platforms";
import ThreeCards from "@components/sections/ThreeCards";
import WordScroller from "@components/WordScroller";
import Contact from "@components/sections/Contact";
import SectionWrapper from "@components/sections/SectionWrapper";
import MotionWrapper from "@components/sections/MotionWrapper";
import TechStack from "@components/sections/TechStack";

export default function App() {
  return (
    <>
      <Start showHero={true} />
      <SectionWrapper>
        <MotionWrapper>
          <About />
        </MotionWrapper>
        <MotionWrapper>
          <ThreeCards />
        </MotionWrapper>
        <MotionWrapper>
          <Platforms />
        </MotionWrapper>
        <MotionWrapper>
          <Panels />
        </MotionWrapper>
        {/* <MotionWrapper>
          <WordScroller />
        </MotionWrapper> */}
        <MotionWrapper>
          <TechStack />
        </MotionWrapper>
        <MotionWrapper>
          <Contact />
        </MotionWrapper>
      </SectionWrapper>
    </>
  );
}
