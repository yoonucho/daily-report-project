import React, { Component } from "react";
import Intro from "./component/Intro";
import Day from "./component/Day";
import Calendar from "./component/Calendar";
import Search from "./component/Search";
import Setting from "./component/Setting";
import Nav from "./component/Nav";
import "./App.css";

class App extends Component {
	// Render : componentWillMount() -> render() -> componentDidMount()
	// Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate()-> render() -> componentDidMount()

	// state = {};

	render() {
		return <div>Hello!</div>;
	}
}

export default App;
