import React, { Component, Fragment } from "react";

class DayItem extends Component {

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.props.list !== nextProps.list;
	// }

	render() {
		return (
			<Fragment>
				<div className="time">
					<h2>{this.props.time}</h2>
				</div>
				<p>{this.props.action}</p>
				<form className="action">
					<input
						type="text"
						defaultValue={this.props.action}
						placeholder="내용을 작성해주세요."
						onChange={this.props.handleChage}
					/>

					<div className="buttons">
						<button type="submit" className="save"
							onClick={this.props.handleSubmit}>저장
									</button>
						<button className="cancel">취소</button>
					</div>
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
