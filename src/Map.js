import React from "react";

import { renderMap } from "./utils.js";

const Map = props => {
  const { id, showSidebar, filteredVenues, addMarkersToMap } = props;

  renderMap();
  window.gm_authFailure = () =>
      alert( "Google map failed to load! Please refresh the page." );

  addMarkersToMap(filteredVenues);

  let mapClass = showSidebar ? "close" : "";
  return (
    <div role="application" aria-hidden="true" id={id} className={mapClass} />
  );
};

export default Map;
