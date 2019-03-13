import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from 'axios';
=======
import axios from "axios";
>>>>>>> 77118eafe27b80d2f0f80b816a14667d59247803
// import moment from 'moment';
import DayList from "../components/DayList";
import DayScore from "../components/DayScore";

const Day = () => {
	const oneDay = new Array(25).fill(0).map((key, index) => ({
		id: index,
		action: `test${index}`,
		time: `${index}`
	}));

	const [list, setList] = useState(oneDay);

<<<<<<< HEAD
const Day = () => {

	const [list, setList] = useState({ oneday })

=======
	console.log(oneDay);
	// state = {
	// 	list: oneDay

	// };

>>>>>>> 77118eafe27b80d2f0f80b816a14667d59247803
	const getUrl = async () => {
		try {
			const response = await axios.get(
				"http://localhost:4000/today/2019-02-11"
			);
			list({ list: response.data });
		} catch (error) {
			console.log(error);
		}
<<<<<<< HEAD
	}
	//componentDidMount(), componentDidUpdate()와 비슷
	useEffect(() => {
		getUrl();
	}, []);


	// 인풋 클릭했을때
	handleChange = e => {
		// 페이지 리로딩 방지
		e.preventDefault();
		setList({
			action: e.target.value
		});
	};

=======
	};

	//componentDidMount(), componentDidUpdate()와 비슷
	useEffect(() => {
		getUrl();
	}, []);

	// 인풋 클릭했을때
	const handleChange = e => {
		setList(e.target.value);
	};

>>>>>>> 77118eafe27b80d2f0f80b816a14667d59247803
	console.log("today");
	return (
		<div className="day">
			<h1 className="day-title">title</h1>
<<<<<<< HEAD
			{/* 이게 가능한것인가? */}
			<DayList list={list} onChange={this.handleChange} />
			<DayScore />
		</div>
	)

}
=======
			<DayList list={list} onChange={handleChange} />
			<DayScore />
		</div>
	);
};
>>>>>>> 77118eafe27b80d2f0f80b816a14667d59247803

export default Day;
