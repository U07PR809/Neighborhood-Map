import React from "react";

import VenuesList from "./VenuesList.js";

const Sidebar = props => {
	let sidebarClass;

	if (props.showSidebar) {
		sidebarClass = "";
	} else {
		sidebarClass = "close";
	}

	return (
		<aside id="sidebar" className={sidebarClass}>
			<div className="wrapper">
				<h2>Venues</h2>
				<input
					type="text"
					aria-label="Search Venues"
					placeholder="Search Venues"
					value={props.queryString}
					onChange={event => props.updateQuery(event.target.value)}
				/>
			</div>
			<VenuesList
				filteredVenues={props.filteredVenues}
				openInfoWindow={props.openInfoWindow}
			/>
		</aside>
	);
};

export default Sidebar;
