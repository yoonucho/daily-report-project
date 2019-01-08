import React, { Component, Fragment } from "react";
// import axios from 'axios';
// import moment from 'moment';
import DayList from "../components/DayList";
import DayScore from "../components/DayScore";


const oneDay = new Array(25).fill(0).map((key, index) => ({ id: "", action: `${index}`, time: `${index}` }));

class Day extends Component {
	state = {
		list: oneDay

	};



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

	// componentDidMount() {
	// 	axios.get('http://localhost:4000/today/')
	// 		.then(response => {
	// 			this.setState({ list: response.data });
	// 		}).catch((error) => {
	// 			console.log(error);
	// 		});
	// }

	// 인풋 클릭했을때
	handleChange = e => {
		// 페이지 리로딩 방지
		e.preventDefault();
		this.setState({
			action: e.target.value
		});
	};

	// 저장버튼 눌렀을때
	handleSubmit = e => {
		// 페이지 리로딩 방지
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
					<DayList list={this.state.list} onChange={this.state.handleChange} />
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
