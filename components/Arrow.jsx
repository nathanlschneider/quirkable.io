const Arrow = (props) => {
	return (
		<div style={{
            zIndex: "999",
			right: "53px",
			position: "absolute",
			bottom: "37px",
            transform: "scale(.8)",
            pointerEvents: "none"
            }}>
			<svg xmlns='http://www.w3.org/2000/svg' width={16} height={61} fill='#fff' {...props}>
				<path
					fill='#fff'
					d='M7.293 60.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 58.586l-5.657-5.657A1 1 0 0 0 .93 54.343l6.364 6.364ZM7 0v60h2V0H7Z'
				/>
			</svg>
		</div>
	);
};

export default Arrow;
