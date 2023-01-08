import { Outlet } from "react-router-dom";
import SideBar from "../layout/SideBar";

function RootLayout() {
	return (
		<div className="RootLayout d-flex">
			<SideBar />
			<div className="pages-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa!
				<Outlet />
			</div>
		</div>
	);
}

export default RootLayout;
