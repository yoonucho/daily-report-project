import React, { Component } from "react";
import DayItem from "./DayItem"

class DayList extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.list !== nextProps.list;
	}

	render() {
		const { list } = this.props;
		const dayList = list.map(
			time => (
				<DayItem key={time.id} action={time.action}/>
			)
		);

		return (
			<div>
				{dayList}
			</div>
		);
	}
}

export default DayList;
