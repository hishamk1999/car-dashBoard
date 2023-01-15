import React from "react";
import BookingCarCard from "../components/BookingCarCard";
import BookingCategoriesBar from "../layout/BookingCategoriesBar";

function Booking() {
	return (
		<div className="Booking ">
			<h1>Booking</h1>
			<BookingCategoriesBar />
			<div className="row border-info border-warning ">
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={
						"Vendors/BookingCars/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png"
					}
					imgAlt={"car-audi-a3-audi-a4-car"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={
						"Vendors/BookingCars/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png"
					}
					imgAlt={"2014-mercedes-benz-m-class"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={"Vendors/BookingCars/white car.png"}
					imgAlt={"white car"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={
						"Vendors/BookingCars/maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png"
					}
					imgAlt={"maruti-suzuki-dzire-car"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={
						"Vendors/BookingCars/suzuki-ertiga-maruti-car-suzuki-ciaz-suzuki-dcac04d3f676c91c7ca6f2d195b86ff3.png"
					}
					imgAlt={"suzuki-ertiga-maruti-car"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={
						"Vendors/BookingCars/toyota-innova-toyota-avanza-car-rush-toyota-seven-cars-a3650fca54041ac1aaae4fe013ac79ca 1.png"
					}
					imgAlt={"toyota-innova-toyota-avanza-car"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={
						"Vendors/BookingCars/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png"
					}
					imgAlt={"car-audi-a3-audi-a4-car"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={
						"Vendors/BookingCars/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png"
					}
					imgAlt={"2014-mercedes-benz-m-class"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
				<BookingCarCard
					title={"Porshe 718 Cayman S"}
					model={"Coupe"}
					imgSrc={"Vendors/BookingCars/white car.png"}
					imgAlt={"white car"}
					numberOfSeats={"4"}
					gearType={"Manual"}
					rentalPrice={"400"}
				/>
			</div>
		</div>
	);
}

export default Booking;
