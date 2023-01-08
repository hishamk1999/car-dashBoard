import React from "react";
import CustomLink from "../components/CustomLink";

//Icons
import SettingsIcons from "./icons/SettingsIcons";
import SignOutIcon from "./icons/SignOutIcon";

function ContentsBottom() {
	return (
		<>
			<div className="Contents-bottom">
				{/* settings */}
				<CustomLink
					to={"settings"}
					title={"Settings"}
					icon={<SettingsIcons />}
					className={"mb-3"}
				/>
				{/* Log out */}
				<CustomLink to={"log-out"} title={"Log out"} icon={<SignOutIcon />} />
			</div>
		</>
	);
}

export default ContentsBottom;
