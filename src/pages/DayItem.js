import React, { Component, Fragment } from "react";

class DayItem extends Component {
	state = {
		// editing:false,
	}

	render() {
		return (
			<Fragment>
				<div className="time">
					<h2>{this.props.id}</h2>
				</div>
				<form className="action">
					{/* 만약 내용이 있으면 p를 보여주고 없으면 인풋을 보여줘라. */}
					<input
						type="text"
						defaultValue={this.props.action}
						placeholder="내용을 작성해주세요."
						onChange={this.handleChage}
					/>
					<p>{this.props.action}</p>

				</form>
				{/* <div className="buttons">
					<button type="submit" className="save">
						저장
					</button>
					<button className="delete">삭제</button>
				</div> */}
			</Fragment>

		);
	}
}

export default DayItem;
