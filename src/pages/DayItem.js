import React, { Component } from "react";

class DayItem extends Component {
	render() {
		return (
			<li className="day-list-item">
				<div className="time">
					<h2>time</h2>
				</div>
				<p>{this.props.done}</p>
				<div className="buttons">
					<button type="submit" className="save">
						수정
					</button>
					<button className="delete">삭제</button>
				</div>
			</li>
		);
	}
}

export default DayItem;
