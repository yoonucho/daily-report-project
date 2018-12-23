import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Intro from "./pages/Intro";
import Day from "./pages/Day";
import Calendar from "./pages/Calendar";
import Search from "./pages/Search";
import Setting from "./pages/Setting";
import About from "./pages/About";
import "./App.css";
import "./assets/style.scss";
import "./assets/reset.css";

class App extends Component {
	// Render : UNSAFE_componentWillMount()(v16.3 이후) -> render() -> componentDidMount()
	// Update :UNSAFE_componentWillReceiveProps() (v16.3 이후) -> shouldComponentUpdate() == true -> getSnapshotBeforeUpdate()(v16.3 이후) -> render() -> componentDidMount()

	// state = {};

	render() {
		return (
			<Router>
				<Fragment>
					<Nav />
					<Route exact path="/" component={Intro} />
					<Route path="/day" component={Day} />
					<Route path="/calendar" component={Calendar} />
					<Route path="/search" component={Search} />
					<Route path="/setting" component={Setting} />
					<Route path="/about" component={About} />
				</Fragment>
			</Router>
		);
	}
}

export default App;
