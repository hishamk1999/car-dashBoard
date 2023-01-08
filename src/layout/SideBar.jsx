import React from "react";
import ContentsBottom from "../components/ContentsBottom";

// Components
import ContentsTop from "../components/ContentsTop";

function SideBar() {
	return (
		<aside className="SideBar d-flex flex-column">
			{/* Logo icon and Brand Name */}
			<div className="SideBar__logo d-flex align-items-center">
				<span className="logo-svg me-1">
					<svg
						width="27"
						height="27"
						viewBox="0 0 27 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							y="0.0750122"
							width="26.914"
							height="26.85"
							rx="6"
							fill="#A162F7"
						/>
						<path
							d="M9.1273 19.7071L10.8492 17.9851C6.48698 15.3448 7.21403 11.3365 8.12284 9.66239L13.5039 14.9L18.885 9.66239C20.9513 14.1394 17.8805 17.0285 16.0868 17.9134L17.9523 19.7071C24.6248 14.6847 21.3961 7.94045 18.885 6.07501L13.5039 11.4561L7.97934 6.07501C2.09602 11.8148 6.25741 18.2721 9.1273 19.7071Z"
							fill="white"
						/>
					</svg>
				</span>
				<h2 className="mb-0 ms-2">Motiv.</h2>
			</div>
			{/* Contents */}
			<div className="Contents-ctn d-flex flex-column justify-content-between h-100">
				{/* Contents top Component*/}
				<ContentsTop />
				{/* Contents bottom Component*/}
				<ContentsBottom />
			</div>
		</aside>
	);
}

export default SideBar;
