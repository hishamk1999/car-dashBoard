import React from "react";
import SortDown from "./icons/SortDown";

/**
 * @param {string} selectName
 * @param {string} selectId
 * @param {Array} options it's take array of options [{value: string , title: string}]
 * @returns  select element
 */
function CustomSelect({ className, selectName, selectId, options = [] }) {
	return (
		<div className={`CustomSelect ${className}`}>
			<select name={selectName} id={selectId}>
				{options.length
					? options.map((option, index) => {
							return (
								<option key={index} value={`${option.value}`}>
									{option.title}
								</option>
							);
					  })
					: null}
			</select>
			<span className="sort-down">
				<SortDown />
			</span>
		</div>
	);
}

export default CustomSelect;
