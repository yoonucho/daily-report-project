import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
// import moment from 'moment';
import DayList from "../components/DayList";
import DayScore from "../components/DayScore";


const oneDay = new Array(25).fill(0).map((key, index) => ({ id: index, action: `test${index}`, time: `${index}` }));

const Day = () => {
	const [list, setList] = useState({ oneday })

	//componentDidMount(), componentDidUpdate()와 비슷
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get('http://localhost:4000/today/2019-02-11');
				list({ list: response.data });
			} catch (error) {
				console.log(error);
			}
		})

	});

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

	// 저장버튼 눌렀을때
	handleSubmit = e => {
		// 페이지 리로딩 방지
		e.preventDefault();
		console.log("handleSubmit")
		// e.preventDefault();
		// this.setState(({ list, action, id }) => ({
		// 	list: [
		// 		...list,
		// 		{
		// 			id,
		// 			action
		// 		}
		// 	],
		// 	action

		// }));

	};

	render() {
		console.log("today");
		return (
			<Fragment>
				<div className="day">
					<h1 className="day-title">title</h1>
					<DayList list={list} onChange={this.handleChange} />
					<DayScore />
					{/* <li className="day-list-item">
							<div className="time">
								<h2>time</h2>
							</div>
							<form className="action">
								<input
									type="text"
									value={this.state.action}
									placeholder="내용을 작성해주세요."
									onChange={this.handleChage}
								/>
							
							
								<div className="buttons">
									<button type="submit" className="save"
										onClick={this.handleSubmit}>저장
									</button>
									<button className="cancel">취소</button>
								</div>
							</form>
						</li> */}
				</div>
			</Fragment>
		)
	}
}

export default Day;
