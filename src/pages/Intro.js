import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Intro extends Component {
	render() {
		return (
			<Fragment>
				<div className="intro">
					<div className="intro-inner">
						<h1>
							Daily
							<br />
							Report
						</h1>
						<Link to="/today" className="button">
							START
						</Link>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Intro;
