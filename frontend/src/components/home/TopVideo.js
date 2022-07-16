import React from "react";
function TopVideo(props) {
	return (
		<video autoPlay muted width="100%" loop className="top-video">
			<source src={props.src} type={props.type} />
		</video>
	);
}

export default TopVideo;