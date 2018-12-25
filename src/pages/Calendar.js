import React, { Component, Fragment } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "../assets/calendar.css";

class Calendar extends Component {
	render() {
		const events = [
			{
				title: "Today",
				start: new Date(),
				end: new Date()
			}
		];
		const localizer = BigCalendar.momentLocalizer(moment);

		//console.log("calendar");
		return (
			<Fragment>
				<div className="example">
					<BigCalendar
						localizer={localizer}
						events={events}
						views={["month"]}
						startAccessor="start"
						endAccessor="end"
						onSelectEvent={event => alert(event.title)}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Calendar;
