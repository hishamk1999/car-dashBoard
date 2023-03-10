import { Outlet } from "react-router-dom";
import UpperBar from "../components/UpperBar";
import SideBar from "../layout/SideBar";

function RootLayout() {
	return (
		<div className="RootLayout d-flex overflow-hidden">
			<SideBar />
			<div className="pages-content flex-grow-1">
				{/* Upper Bar */}
				<UpperBar />
				{/* This Outlet it will be replaced and pages will be displayed instead  */}
				<Outlet />
			</div>
		</div>
	);
}

export default RootLayout;
