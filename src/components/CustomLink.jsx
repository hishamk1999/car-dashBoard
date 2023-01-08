import React from "react";
import { NavLink } from "react-router-dom";

function CustomLink({ to, className, title, end, icon }) {
	return (
		<>
			<NavLink
				to={to}
				end={end}
				className={`${className} CustomLink d-flex align-items-center`}
			>
				{icon}
				{title}
			</NavLink>
		</>
	);
}

export default CustomLink;
