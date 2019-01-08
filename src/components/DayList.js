import React, { Component } from "react";
import DayItem from "./DayItem"

class DayList extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.list !== nextProps.list;
	}

	render() {
		const { list } = this.props;
		const dayList = list.map(
			item => (
				<DayItem key={item.id} id={item.index} action={item.action} time={item.time} />
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
