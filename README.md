# Project 7: Neighborhood Map (React)

# Table of Contents

-   [Description](#description)
-   [Installation](#installation)
-   [Dependencies](#dependencies)
-   [Directory Structure](#directory-structure)
-   [Features](#features)
-   [Contributions](#contributions)
-   [License](#license)

## Description

A single-page web application that displays several locations of interest in a city Bengaluru using markers on the map. The map app is built on the React framework using dependencies like Google Maps and FourSquare API. The app, by default, displays all locations using markers on the city map, and when a filter is applied it displays the filtered set of locations. Users can search from all included landmarks, and when a landmark is selected either by clicking on the marker or on the location in the list, an additional information about a landmark is displayed on the info window.

The project follows the guidelines of [Udacity Project Rubric]https://review.udacity.com/#!/rubrics/1351/view)

## Installation

-   Either clone the repository locally to your machine or simply download the project as a zip file.
-   Once downloaded, navigate to the directory of the project and run these two commands:
    _ npm install
    _ npm start
    A new window opens in the browser displaying the app. If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

## Dependencies

To run the application, the following applications should be installed:
_ Google Maps API [Google Maps Platform](https://developers.google.com/maps/documentation/)
_ Foursquare API [](https://foursquare.com/)

## Directory Structure

```bash
├── README.md - This file.
├── package.json # npm package manager file
├── public
│   ├── favicon.ico # React Icon
│   ├── index.html # DO NOT MODIFY
│   ├── manifest.json
│   └── serviceWorker.js # used for offline accessibility of app
└── src
    ├── threelines.svg # menu icon
    ├── App.css # file that styles app
    ├── App.js # the root file, contains static HTML
    ├── App.test.js # used for testing, testing is encouraged, but not required
    ├── index.css # global styles
    ├── index.js # only used for DOM rendering
    ├── registerServiceWorker.js # function that registers service worker
    ├── utils.js # utility functions to perform necessary operations to render Map using the backend Google Map API
    ├── SquareAPI.js # utility functions to perform necessary operations on the backend Foursquare API
    ├── Header.js # component for the display of the header
    └── body
	    └── Body.js
	        ├── Map.js # component for the display of Google map
            └── Sidebar.js # component for the display of search input field and venue list
                └── VenuesList.js
```

## Features

-   The display window shows a Google Map of the city Bengaluru, India, with several locations of interest set up as markers on the map. Locations can be chosen either by:
    _ Clicking on a marker directly, or
    _ Clicking on an item in the list of locations on the left side of the window.

-   An information window will pop up over the chosen marker, giving information along with the photograph ( if available) of the location. The user can also limit the number of displayed markers by typing letters or a word into an input box above the list. This will narrow the markers down to display matching query only.

-   Filter locations: Includes a text input field to identify popular locations or places by filtering the locations from the list of locations matching the text input.

-   List View: A list-view of location names is provided which displays all locations by default to support simple browsing of all locations, and displays the filtered subset of locations when a filter is applied. Clicking a location on the list displays unique information about the location, and animates the associated marker on the map.

## Contributions

I hereby confirm that this submission is my work; there are no other contributors as per Udacity guidelines for this project. Neither did I copied nor pasted any code. I only made use of the React Libraries and the starter code (if any) provided by Udacity.

## License

This project is licensed under the Creative Commons License. Any user is free to:

-   Share - copy and redistribute the material in any medium or format
-   Adapt - remix, transform and build upon the material for any purpose, even commercially.
