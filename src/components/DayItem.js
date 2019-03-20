import React, { useState } from "react";

const DayItem = props => {
	const [action, setAction] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		alert(`${action}${props.action}`);
		setAction("");
	};

	return (
		<li className="day-list-item">
			<div className="time">
				<h2>{props.time}</h2>
			</div>
			<p>{props.action}</p>
			<form className="action" onSubmit={handleSubmit}>
				<input
					type="text"
					defaultValue={props.action}
					placeholder="내용을 작성해주세요."
					onChange={props.handleChange}
				/>

				<div className="buttons">
					<button type="submit" className="save">
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
