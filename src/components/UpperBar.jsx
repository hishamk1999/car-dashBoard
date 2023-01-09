import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon";
import NotificationIcon from "./icons/NotificationIcon";

function UpperBar() {
	return (
		<div className="upperBar w-100 d-flex align-items-center justify-content-between">
			{/* Search Field */}
			<div className="SearchField d-flex">
				<label htmlFor="search">
					<MagnifyingGlassIcon />
				</label>
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search or type"
					className="w-100"
				/>
			</div>
			{/* Profile and notification */}
			<div className="ProfileField d-flex align-items-center">
				<NavLink to={"notification"} className="position-relative">
					<NotificationIcon />
					<div className="redDot position-absolute rounded"></div>
				</NavLink>
				<div className="profilePhoto ms-5">
					<NavLink to={"profile"}>
						<img
							src="Vendors/Icons/portrait-handsome-european-male-student-has-gentle-smile-face-happy-hear-pleasant-news-stands-delighted-wears-round-spectacles-orange-jumper.png"
							alt="Profile"
							className="w-100"
						/>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default UpperBar;
