import React from "react";

const VenuesList = props => {
	const { filteredVenues } = props;

	return (
		<ol id="venues-list">
			{filteredVenues.map(filteredVenue => {
				const name = filteredVenue.name
					? filteredVenue.name
					: "Name: Not Available";

				return (
					<li key={filteredVenue.id}>
						<button
							className="venue-info"
							onClick={() => props.openInfoWindow(filteredVenue)}
						>
							{name}
						</button>
					</li>
				);
			})}
		</ol>
	);
};

export default VenuesList;
