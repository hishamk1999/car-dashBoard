import React from "react";
import CustomSelect from "../components/CustomSelect";

// Icons
import FilterIcon from "../components/icons/FilterIcon";
import GridIcon from "../components/icons/GridIcon";
function BookingCategoriesBar() {
	return (
		<div className="BookingCategoriesBar d-flex align-items-center justify-content-between">
			{/* Car case & Car Brand */}
			<div className="Categories d-flex">
				<CustomSelect
					className="me-2"
					selectName={"carCase"}
					selectID={"carCase"}
					options={[
						{
							value: "old",
							title: "Old",
						},
						{
							value: "new",
							title: "New",
						},
						{
							value: "used",
							title: "Used",
						},
					]}
				/>
				<CustomSelect
					selectName={"carBrand"}
					selectID={"carBrand"}
					options={[
						{
							value: "Toyota",
							title: "Toyota",
						},
						{
							value: "KIA",
							title: "KIA",
						},
						{
							value: "Hyundai",
							title: "Hyundai",
						},
					]}
				/>
			</div>
			<div className="CoordinatorTools">
				<button className="me-3 grid">
					<GridIcon />
				</button>
				<button className="filter">
					<FilterIcon />
				</button>
			</div>
		</div>
	);
}

export default BookingCategoriesBar;
