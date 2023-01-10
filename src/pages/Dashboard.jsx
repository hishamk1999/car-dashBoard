import React from "react";
import ProgressCard from "../components/ProgressCard";
// Icons
import Energy from "../components/icons/Energy";
import Range from "../components/icons/Range";
import Drop from "../components/icons/Drop";
import Tier from "../components/icons/Tier";

function Dashboard() {
	return (
		<div className="Dashboard">
			<div className="row">
				<ProgressCard
					title="Energy"
					cardName={"energy"}
					icon={<Energy />}
					percentage={45}
					percentageText={"45"}
					textColor={"#ffffff"}
					pathColor={"#ffffff"}
					trailColor={"#B37EFC"}
				/>
				<ProgressCard
					title="Range"
					cardName={"range"}
					icon={<Range />}
					percentage={57}
					percentageText={"157k"}
					textColor="#242731"
					pathColor="#FF7E86"
				/>
				<ProgressCard
					title="Break fluid"
					cardName={"drop"}
					icon={<Drop />}
					percentage={9}
					percentageText={"9"}
					textColor="#242731"
					pathColor="#A162F7"
				/>
				<ProgressCard
					title="Tire Wear"
					cardName={"tier"}
					icon={<Tier />}
					percentage={25}
					percentageText={"25"}
					textColor="#242731"
					pathColor="#F6CC0D"
				/>
			</div>
		</div>
	);
}

export default Dashboard;
