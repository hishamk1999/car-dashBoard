import React from "react";
import CustomLink from "../components/CustomLink";

// icons
import DashboardIcon from "../components/icons/DashboardIcon";
import AssetsIcon from "../components/icons/AssetsIcon";
import CarIcon from "../components/icons/CarIcon";
import ShoppingBagIcon from "../components/icons/ShoppingBagIcon";
import ShoppingCartIcon from "../components/icons/ShoppingCartIcon";
import FencingIcon from "../components/icons/FencingIcon";
import CalendarIcon from "../components/icons/CalendarIcon";
import CommentIcon from "../components/icons/CommentIcon";

function ContentsTop() {
	return (
		<>
			{/* Contents top */}
			<div className="Contents-top">
				{/* Dashboard */}
				<CustomLink
					to={"/"}
					title={"Dashboard"}
					end={"end"}
					icon={<DashboardIcon />}
				/>
				{/* Assets */}
				<CustomLink to={"assets"} title={"Assets"} icon={<AssetsIcon />} />
				{/* Booking */}
				<CustomLink to={"booking"} title={"Booking"} icon={<CarIcon />} />
				{/* Sell Cars */}
				<CustomLink
					to={"sell-cars"}
					title={"Sell Cars"}
					icon={<ShoppingBagIcon />}
				/>
				{/* Buy Cars */}
				<CustomLink
					to={"buy-cars"}
					title={"Buy Cars"}
					icon={<ShoppingCartIcon />}
				/>
				{/* Services */}
				<CustomLink to={"services"} title={"Services"} icon={<FencingIcon />} />
				{/* Calender */}
				<CustomLink
					to={"calender"}
					title={"Calender"}
					icon={<CalendarIcon />}
				/>
				{/* Messages */}
				<CustomLink to={"messages"} title={"Messages"} icon={<CommentIcon />} />
			</div>
		</>
	);
}

export default ContentsTop;
