
function TopVideo(props) {
	return (
		<div>
			<video autoPlay muted width="100%" loop className="top-video">
				<source src={props.src} type={props.type} />
			</video>
		</div>
	);
};

export default TopVideo;