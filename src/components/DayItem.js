import React from "react";

const DayItem = props => {
	return (
		<li className="day-list-item">
			<div className="time">
				<h2>{props.time}</h2>
			</div>
			<p>{props.action}</p>
			<form className="action">
				<input
					type="text"
					defaultValue={props.action}
					placeholder="내용을 작성해주세요."
					onChange={props.handleChange}
				/>

				<div className="buttons">
					<button
						type="submit"
						className="save"
						onClick={props.handleSubmit}
					>
						저장
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
		</li>
	);
};

export default DayItem;
