import React, { Component } from "react";

import Header from "./Header.js";
import Body from "./Body.js";

import "./App.css";

class App extends Component {
	state = {
		sidebarOpen: false
	};

	handleMenuClick = () => {
		this.setState(prevState => {
			return { sidebarOpen: !prevState.sidebarOpen };
		});
	};

	render() {
		return (
			<div className="app">
				<Header toggleSidebar={this.handleMenuClick} />
				<Body showSidebar={this.state.sidebarOpen} />
			</div>
		);
	}
}

export default App;
