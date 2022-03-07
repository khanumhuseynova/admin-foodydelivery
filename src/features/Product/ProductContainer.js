import React from 'react';
import ProductHeader from './ProductHeader/ProductHeader';
import './ProductContainer.css';
import Paginations from '../../components/Paginations';
import ProductCart from './ProductCart/ProductCart';

const ProductContainer = () => {
	return (
		<div className="productContainer">
			<ProductHeader />
			<div className="productMain">
				<ProductCart />
				<Paginations />
			</div>
		</div>
	);
};

export default ProductContainer;
