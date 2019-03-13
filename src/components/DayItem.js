import React, { useState } from "react";

const DayItem = props => {
	return (
		<li className="day-list-item">
			<div className="time">
				<h2>{time}</h2>
			</div>
			<p>{action}</p>
			<form className="action">
				<input
					type="text"
					defaultValue={action}
					placeholder="내용을 작성해주세요."
					onChange={handleChange}
				/>

				<div className="buttons">
					<button
						type="submit"
						className="save"
						onClick={handleSubmit}
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
