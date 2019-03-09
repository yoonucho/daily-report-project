import React, { useState, useEffect } from "react";
import axios from 'axios';
// import moment from 'moment';
import DayList from "../components/DayList";
import DayScore from "../components/DayScore";


const oneDay = new Array(25).fill(0).map((key, index) => ({ id: index, action: `test${index}`, time: `${index}` }));

const Day = () => {

	const [list, setList] = useState({ oneday })

	//componentDidMount(), componentDidUpdate()와 비슷

	useEffect(() => {
		(async function () {
			try {
				const response = await axios.get('http://localhost:4000/today/2019-02-11');
				list({ list: response.data });
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	// 업데이트 될 때
	// handleUpdate = () => {
	// 	this.setState(({ list, action, id }) => ({
	// 		list: [
	// 			...list,
	// 			{
	// 				id,
	// 				action
	// 			}
	// 		],

	// 	}));

	// }





	// 인풋 클릭했을때
	handleChange = e => {
		// 페이지 리로딩 방지
		e.preventDefault();
		setList({
			action: e.target.value
		});
	};

	console.log("today");
	return (
		<div className="day">
			<h1 className="day-title">title</h1>
			{/* 이게 가능한것인가? */}
			<DayList list={list} onChange={this.handleChange} />
			<DayScore />
		</div>
	)

}

export default Day;
