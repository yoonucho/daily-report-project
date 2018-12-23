import React, { Component, Fragment } from "react";
import { MdHome } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdMood } from "react-icons/md";
import { Link } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<Fragment>
				<nav className="nav">
					<ul className="nav-list">
						<li>
							<Link to="/day">
								<MdHome />
								<span>오늘</span>
							</Link>
						</li>
						<li>
							<Link to="/calendar">
								<MdDateRange />
								<span>달력</span>
							</Link>
						</li>
						<li>
							<Link to="/search">
								<MdAssignment />
								<span>기록</span>
							</Link>
						</li>
						<li>
							<Link to="/setting">
								<MdSettings />
								<span>설정</span>
							</Link>
						</li>
						<li>
							<Link to="/about">
								<MdMood />
								<span>소개</span>
							</Link>
						</li>
					</ul>
				</nav>
			</Fragment>
		);
	}
}
export default Nav;
