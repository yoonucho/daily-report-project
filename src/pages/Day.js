import React, { Component, Fragment } from "react";
import DayItem from "./DayItem";
import DayScore from "./DayScore";

class Day extends Component {
	state = {
		list: [
			{
				done: "test1"
			},
			{
				done: "test2"
			},
			{
				done: "test3"
			},
			{
				done: "test4"
			}
		],
		done: ""
	};



	// 저장버튼 눌렀을때
	handleSubmit = e => {
		// 페이지 리로딩 방지
		e.preventDefault();
		this.setState(({ list, done }) => ({
			list: [
				...list,
				{
					done
				}
			],
			done: ""
		}));
	};

	// 인풋 클릭했을때
	handleChage = e => {
		this.setState({
			done: e.target.value
		});
	};

	render() {
		console.log("today");
		return (
			<Fragment>
				<div className="day">
					<h1 className="day-title">title</h1>
					<ul className="day-list">
						{this.state.list.map((item, key) => {
							return <DayItem key={key} done={item.done} />;
						})}

						<li className="day-list-item">
							<div className="time">
								<h2>time</h2>
							</div>
							<form className="action">
								<input
									type="text"
									value={this.state.done}
									placeholder="내용을 작성해주세요."
									onChange={this.handleChage}
								/>
								<DayScore />
								{/* <form className="note">
								<textarea placeholder="노트를 작성해 주세요." />
							</form> */}
								<div className="buttons">
									<button type="submit" className="save"
										onClick={this.handleSubmit}>저장
									</button>
									<button className="cancel">취소</button>
								</div>
							</form>
						</li>
					</ul>
				</div>
			</Fragment>
		);
	}
}

export default Day;
