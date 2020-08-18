import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "../store";
import Leads from "./leads/Leads";
import leads from "../reducers/leads";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<h1>React App</h1>;
				<Leads />
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
