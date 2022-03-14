import React from 'react';
import RestaurantsHeader from './RestaurantsHeader/RestaurantsHeader';
import Paginations from '../../components/Paginations';
import RestaurantsCart from './RestaurantsCart/RestaurantsCart';

const RestaurantsContainer = () => {
	return (
		<div className="RestaurantsContainer">
			<RestaurantsHeader />
			<div className="RestaurantsMain">
				<RestaurantsCart />
				<Paginations />
			</div>
		</div>
	);
};

export default RestaurantsContainer;
