import React, { Component, Fragment } from "react";

class Setting extends Component {
	render() {
		return (
			<Fragment>
				<div className="setting">
					<div className="setting-inner">
						<h1>설정</h1>
						<form>
							<fieldset>
								<label for="starttime">시작 시간</label>
								<select id="starttime">
									<option value="06:00">06:00</option>
									<option value="07:00">07:00</option>
									<option value="08:00">08:00</option>
									<option value="09:00">09:00</option>
									<option value="10:00">10:00</option>
									<option value="11:00">11:00</option>
								</select>
							</fieldset>
							<fieldset>
								<label for="lang">달력 언어</label>
								<select id="lang">
									<option value="ko">한국어</option>
									<option value="en">영어</option>
								</select>
							</fieldset>
							<fieldset className="submit">
								<button type="submit" className="save">
									저장
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Setting;
