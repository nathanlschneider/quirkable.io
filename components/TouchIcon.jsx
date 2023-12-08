import TouchScreen from "@components/TouchScreen";
const TouchIcon = (props) => {
	const { width } = props;
	return (
		<div
			style={{
				position: "relative",
				bottom: "100px",
				left: "calc(20px + 4vw);",
				zIndex: "9999",
				animation: "exit linear",
				animationTimeline: "scroll(root)",
			}}>

			<div id="animationWrapper" style={{position: "absolute", animation: "tapscreen 6s ease infinite", animationDelay: "2s"}}>
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
		</div>
	);
};

export default TouchIcon;
