import React, { Component, Fragment } from "react";
import DayItem from "./DayItem";
import DayScore from "./DayScore";

class Day extends Component {
	state = {
		list: [
			{
				id: "2018-12-27-01-02",
				action: "",
				score: undefined
			},
			{
				id: "2018-12-27-01-02",
				action: "",
				score: undefined
			},
			{
				id: "2018-12-27-02-03",
				action: "",
				score: undefined
			},

			{
				id: "2018-12 -27-03-04",
				action: "",
				score: undefined
			},

		],
		action: ""
	};


	// 업데이트 될 때
	handleUpdate = () => {
		this.setState(({ list, action, id }) => ({
			list: [
				...list,
				{
					id,
					action
				}
			],
			action

		}));

	}
	// 인풋 클릭했을때
	handleChage = e => {
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
					<ul className="day-list">
						{this.state.list.map((item) => {
							return (
								<li className="day-list-item">
									<DayItem key={item.id} action={item.action} />
									<DayScore />
									<div className="buttons">
										<button type="submit" className="save"
											onClick={this.handleSubmit}>저장</button>
										<button className="cancel">취소</button>
									</div>
								</li>)
						})};
					</ul>
				</div>
			</Fragment>
		)
	}
}

export default Day;
