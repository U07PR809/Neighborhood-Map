import React from "react";

const Header = props => {
	return (
		<header>
			<button aria-label="menu" id="menu-btn">
				<img
					src={require("./threelines.svg")}					
					alt="menu icon"
					onClick={props.toggleSidebar}
				/>
			</button>
			<h1>Neighborhood Map</h1>
		</header>
	);
};

export default Header;
