import React, { Component } from "react";

import SquareAPI from "./SquareAPI.js";
import Sidebar from "./Sidebar.js";
import Map from "./Map.js";

class Body extends Component {
  state = {
    queryString: "",
    filteredVenues: []
  };

  componentDidMount = () => {
    SquareAPI.search({
      near: "Bengaluru",
      section: "arts"
    })
      .then(results => {
        this.venues = results.response.venues;

        this.venues.forEach(venue => {
          SquareAPI.getVenueDetails(venue.id).then(venueDetails => {
            Object.assign(venue, venueDetails);
          });
        });

        this.setState({
          filteredVenues: this.venues
        });
      })
      .catch(error =>
        alert(
          `An error occured while trying to fetch data from Foursquare: ${error}`
        )
      );
  };

  addMarkersToMap = venues => {
    if (window.google) {
      this.bounds = new window.google.maps.LatLngBounds();
      this.filteredMarkers = venues.map(venue => {
        let marker = new window.google.maps.Marker({
          position: {
            lat: venue.location.lat,
            lng: venue.location.lng
          },
          map: window.map,
          title: venue.name,
          animation: window.google.maps.Animation.DROP,
          id: venue.id
        });
        this.bounds.extend(marker.position);
        return marker;
      });
      window.map.fitBounds(this.bounds);
      this.addInfoWindowsToMarkers(this.filteredMarkers);
    }
  };

  addInfoWindowsToMarkers = markers => {
    this.infoWindows = [];

    markers.forEach(marker => {
      const infoWindow = new window.google.maps.InfoWindow();
      infoWindow.marker = marker;
      this.infoWindows.push(infoWindow);

      marker.addListener("click", () => {
        this.infoWindows.forEach(infoWindow => {
          if (infoWindow.anchor) infoWindow.close();
        });
        this.populateInfoWindow(marker, infoWindow);
        window.map.panTo(marker.position);
        //window.map.panBy(0, -150);
      });
    });
  };

  populateInfoWindow = (marker, infoWindow) => {
    infoWindow.setContent(this.getContent(marker));
    infoWindow.open(window.map, marker);
    window.map.panBy(0, -150);
    infoWindow.addListener("closeclick", () => {
      infoWindow.close();
      window.map.fitBounds(this.bounds);
    });
    this.setMarkerAnimation(marker);
  };

  getContent = marker => {
    const { filteredVenues } = this.state,
      filteredVenue = filteredVenues.find(venue => venue.id === marker.id),
      venueName = filteredVenue.name
        ? filteredVenue.name
        : "name not available";

    const renderImage = () => {
      if (filteredVenue.response.venue.bestPhoto) {
        const { prefix, suffix } = filteredVenue.response.venue.bestPhoto,
          url = `${prefix}200x200${suffix}`,
          alt = `image: ${venueName}`;

        return `<img alt="${alt}" src="${url}" />`;
      } else {
        return "";
      }
    };

    const renderAddress = () => {
      if (filteredVenue.location.formattedAddress) {
        const address = filteredVenue.location.formattedAddress.map(
          item => `<p>${item}<p>`
        );
        return address.join("");
      } else {
        return "Address: Not Available";
      }
    };

    const contentString = `<div class="info-window">
        ${renderImage()}
        <h2>${venueName}</h2>
        ${renderAddress()}       
        <footer>
          Powered by 
            <a href="https://foursquare.com">
              <cite>Foursquare</cite>
            </a>
        </footer>        
      </div>`;

    return contentString;
  };

  setMarkerAnimation = marker => {
    marker.getAnimation() === null
      ? marker.setAnimation(window.google.maps.Animation.BOUNCE)
      : marker.setAnimation(null);

    setTimeout(() => {
      marker.setAnimation(null);
    }, 1400);
  };

  handleVenueClick = venue => {
    const venueMarker = this.filteredMarkers.find(
      marker => marker.id === venue.id
    );

    const venueMarkerInfoWindow = this.infoWindows.find(
      infoWindow => infoWindow.marker.id === venueMarker.id
    );

    this.infoWindows.forEach(infoWindow => {
      if (!infoWindow.anchor)
        this.populateInfoWindow(venueMarker, venueMarkerInfoWindow);
      else if (infoWindow.anchor && infoWindow !== venueMarkerInfoWindow) {
        infoWindow.close();
        this.populateInfoWindow(venueMarker, venueMarkerInfoWindow);
      }
    });
  };

  handleQueryChange = queryString => {
    const filteredVenues = this.filterVenues(queryString);
    this.setState({ queryString, filteredVenues });
  };

  filterVenues = queryString => {
    return this.venues.filter(venue =>
      venue.name.toLowerCase().includes(queryString.toLowerCase())
    );
  };

  render() {
    return (
      <main className="content">
        <Sidebar
          showSidebar={this.props.showSidebar}
          queryString={this.state.queryString}
          updateQuery={this.handleQueryChange}
          filteredVenues={this.state.filteredVenues}
          openInfoWindow={this.handleVenueClick}
        />

        <Map
          id="map"
          showSidebar={this.props.showSidebar}
          filteredVenues={this.state.filteredVenues}
          addMarkersToMap={this.addMarkersToMap}
        />
      </main>
    );
  }
}

export default Body;
