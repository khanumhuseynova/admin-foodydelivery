import './ProductCart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react';

const ProductCartData = [
	{
		id: 1,
		name: 'Marqarita',
		img: 'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 2,
		name: 'Marqarita',
		img: 'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 3,
		name: 'Marqarita',
		img: 'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 4,
		name: 'Marqarita',
		img: 'https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg',
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
];

export default function ProductCart() {
	const [products, setProducts] = useState(ProductCartData);
	return (
		<div className="productCardContainer">
			{products.map((p) => (
				<div className="productsCart">
					<div>
						<img src={p.img} alt={p.name} />
						<h2>{p.name}</h2>
						<h3>{p.restorant}</h3>
						<div className="buttonAction">
							<p>{p.price}</p>
							<button>{p.icon}</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
