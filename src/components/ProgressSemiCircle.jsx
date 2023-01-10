import React from "react";
// react-circular-progressbar (Library).
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressSemiCircle({
	percentage = 10,
	percentageText = 10,
	textColor,
	pathColor,
	trailColor = "#F4F5F9",
}) {
	percentage.toFixed();
	return (
		<div className="progressSemiCircle">
			<CircularProgressbar
				value={percentage}
				text={`${percentageText}%`}
				strokeWidth="10"
				circleRatio={0.75}
				styles={buildStyles({
					// Rotation of path and trail, in number of turns (0-1)
					rotation: 1 / 2 + 1 / 8,
					// Text size
					textSize: "24px",
					// Colors
					pathColor: pathColor,
					textColor: textColor,
					trailColor: trailColor,
				})}
			/>
		</div>
	);
}

export default ProgressSemiCircle;
