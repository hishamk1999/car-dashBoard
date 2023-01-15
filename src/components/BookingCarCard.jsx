import React, { useState } from "react";

// Icons
import HeartIcon from "./icons/HeartIcon";
import UserIcon from "./icons/UserIcon";
import ConverterIcon from "./icons/ConverterIcon";

function BookingCarCard({
	title,
	model,
	imgSrc,
	imgAlt,
	numberOfSeats,
	gearType,
	rentalPrice,
}) {
	const [like, setLike] = useState(false);
	return (
		<div className="BookingCarCard py-2 col-xl-4 col-lg-4 col-md-6 col-sm-12">
			<div className="card border-0 bg-white">
				{/* Header of card*/}
				<div className="card-head">
					<div className="title d-flex align-items-center justify-content-between">
						<h3 className="mb-0">{title}</h3>
						<button
							onClick={() => {
								like ? setLike(false) : setLike(true);
							}}
							className={like ? "liked" : "unLiked"}
						>
							<HeartIcon />
						</button>
					</div>
					<p>{model}</p>
				</div>
				{/* Car image */}
				<div className="card-img w-100 text-center">
					<img src={imgSrc} alt={imgAlt} />
				</div>
				{/* Card footer*/}
				<div className="card-bottom d-flex align-items-center justify-content-between">
					<div className="seats&gear-ctn d-flex align-items-center">
						{/* Number of seats */}
						<div className="number-of-seats me-3 d-flex align-items-center">
							<UserIcon />
							<span className="custom-mute ms-1">{numberOfSeats}</span>
						</div>
						{/* Gear type */}
						<div className="gear-type d-flex align-items-center">
							<ConverterIcon />
							<span className="custom-mute ms-1">{gearType}</span>
						</div>
					</div>
					{/* Rental price  */}
					<div className="rent">
						<p className="mb-0">
							${rentalPrice}
							<span className="custom-mute">/d</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BookingCarCard;
