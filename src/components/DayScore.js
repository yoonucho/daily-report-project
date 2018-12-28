import React, { Component } from "react";

class DayScore extends Component {

	state = {
		buttons: [
			{ label: 'GOOD', score: 3 },
			{ label: 'SOSO', score: 2 },
			{ label: 'BAD', score: 1 },
		]
	}

	// 버튼 클릭했을때 
	handleClick = () => {


	}

	render() {
		return (
			// button.score === list.score
			// { this.state.active ? 'active' : null }
			<div className="score">
				{/* <button type="button" className="{'active':button.score == list.score}" onClick={this.handleClick}>
					{buttons.state.label}</button>
				<button type="button" className="{'active':button.score == list.score}" onClick={this.handleClick}>{buttons.state.label}</button>
				<button type="button" className="{'active':button.score == list.score}" onClick={this.handleClick}>{buttons.state.label}</button> */}
			</div>
		);
	}
}

export default DayScore;
