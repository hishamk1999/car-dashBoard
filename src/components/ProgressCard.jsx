import React from "react";
import ProgressSemiCircle from "./ProgressSemiCircle";

function ProgressCard({
	icon = "ICON",
	title = "Energy",
	cardName,
	percentage = 10,
	percentageText = 10,
	textColor,
	pathColor,
	trailColor = "#F4F5F9",
}) {
	return (
		<div className="ProgressCard col-xl-3 col-lg-3 col-md-6 col-sm-12">
			<div
				className={`card ${cardName} border-0 text-center d-flex align-items-center`}
			>
				<div className="icon d-flex justify-content-center align-items-center">
					{icon}
				</div>
				<h2 className="title">{title}</h2>
				<ProgressSemiCircle
					percentage={percentage}
					percentageText={percentageText}
					textColor={textColor}
					pathColor={pathColor}
					trailColor={trailColor}
				/>
			</div>
		</div>
	);
}

export default ProgressCard;
