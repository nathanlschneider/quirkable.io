import CircleScroll from "@components/CircleScroll";
import Arrow from "@components/Arrow";

const Scroller = () => {
	return (
		<div
			style={{
				position: "absolute",
				bottom: "30px",
				right: "70px",
				zIndex: "9999",
				// animation: "pushexit linear",
				// animationTimeline: "scroll()",
			}}>
			<CircleScroll />
			<Arrow />
		</div>
	);
};

export default Scroller;
