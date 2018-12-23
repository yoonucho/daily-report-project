import React, { Component, Fragment } from "react";
import DayScore from "./DayScore";

class Day extends Component {
	render() {
		console.log("today");
		return (
			<Fragment>
				<div className="day">
					<h1 className="day-title">title</h1>
					<ul className="day-list">
						<li className="day-list-item">
							<div className="time">
								<h2>time</h2>
							</div>
							<div className="action">
								<p>
									<span>내용을 작성해주세요.</span>
								</p>
								<input
									type="text"
									placeholder="한 일을 작성해주세요."
								/>
							</div>
							<DayScore
							/>
							<div className="note">
								<textarea placeholder="노트를 작성해 주세요." />
							</div>
							<div className="buttons">
								<button className="save">저장</button>
								<button className="cancel">취소</button>
							</div>
						</li>
					</ul>
				</div>
			</Fragment>
		);
	}
}

export default Day;
