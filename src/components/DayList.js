import React, { Component } from "react";
import DayItem from "./DayItem"

class DayList extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.list !== nextProps.list;
	}

	render() {
		const { list } = this.props;
		const dayList = list.map(
			(item, index) => (
				<DayItem key={index} id={item.id} action={item.action} time={item.time} />
			)
		);

		return (
			<ul className="day-list">
				{dayList}
			</ul>
		);
	}
}

export default DayList;
