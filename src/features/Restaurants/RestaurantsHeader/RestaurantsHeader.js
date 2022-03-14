import React from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import './RestaurantsHeader.css';

const RestaurantsHeader = () => {
	return (
		<h2 className="names">
			Restaurants
			<div className="restaurantsHeader__rightSide">
				<Dropdown />
				<button className="addButton restaurant__addButton">+ ADD ORDERS</button>
			</div>
		</h2>
	);
};

export default RestaurantsHeader;
