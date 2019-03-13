import React from "react";
import DayItem from "./DayItem";

const DayList = props => {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.props.list !== nextProps.list;
	// }

	const { list } = props;
	const dayList = list.map((item, index) => (
		<DayItem
			key={index}
			id={item.id}
			action={item.action}
			time={item.time}
		/>
	));

	return <ul className="day-list">{dayList}</ul>;
};

const areEqual = (prevProps, nextProps) => {
	return this.props.list !== nextProps.list;
};

export default React.memo(DayList, areEqual);
