import TouchScreen from "@components/TouchScreen";
const TouchIcon = (props) => {
	const { width } = props;
	return (
		<div style={{ position: "relative",
        top: "-100px",
        left: "90px",
        zIndex: "9999",
        animation: "exit linear",
        animationTimeline: "scroll(root)"
        }}>
			<TouchScreen width={width ? width : "40px"} fill='#fff' />
			<div
				style={{
					position: "absolute",
					color: "#fff",
					fontSize: "10px",
					transform: "rotate(-90deg)",
					left: "-43px",
					top: "27px",
					fontWeight: "600",
				}}>
				touch screen
			</div>
		</div>
	);
};

export default TouchIcon;
