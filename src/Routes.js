import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import App from "./App";
import Menu from "./Menu";

export default class Routes extends Component {

	render() {
		return (
			<div>
				<Menu />
				<Switch>
					<Route exact path="/about" component={App} />
				</Switch>
					<Route exact path="/" component={App} />
			</div>
		);
	}
}