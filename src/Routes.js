import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import App from "./App";
import Menu from "./Menu";
import Events from "./Events";
import Publications from "./Publications";
import Thesis from "./Thesis";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default class Routes extends Component {

	render() {
		return (
			<div>
				<Menu />
				<Switch>
					<Route exact path="/events" component={Events} />
					<Route exact path="/publications" component={Publications} />
					<Route exact path="/thesis" component={Thesis} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/" component={App} />
				</Switch>
				<Footer />
			</div>
		);
	}
}