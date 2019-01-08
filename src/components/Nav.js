import React, { Component, Fragment } from "react";
import { MdHome } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdMood } from "react-icons/md";
import { NavLink } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<Fragment>
				<nav className="nav">
					<ul className="nav-list">
						<li>
							<NavLink to="/today:date" activeClassName="active">
								<MdHome />
								<span>오늘</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/calendar">
								<MdDateRange />
								<span>달력</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/report">
								<MdAssignment />
								<span>기록</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/setting">
								<MdSettings />
								<span>설정</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/about">
								<MdMood />
								<span>소개</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</Fragment>
		);
	}
}
export default Nav;
