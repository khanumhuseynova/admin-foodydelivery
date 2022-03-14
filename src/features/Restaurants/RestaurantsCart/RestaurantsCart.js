import './RestaurantsCart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useRef, useState } from 'react';
import ModalDelete from '../../../components/ModalDelete/ModalDelete';

const RestaurantstData = [
	{
		id: 1,
		category: 'Pizza',
		img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/640px-Papa_John%27s_Pizza_logo.svg.png',
		restorant: 'Papa John’s',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 2,
		category: 'Fast Food',
		img: 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png',
		restorant: 'Burger King',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 3,
		category: 'Fast Food',
		img: 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png',
		restorant: 'Burger King',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 4,
		category: 'Fast Food',
		img: 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png',
		restorant: 'Burger King',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 5,
		category: 'Pizza',
		img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/640px-Papa_John%27s_Pizza_logo.svg.png',
		restorant: 'Papa John’s',
		icon: <DeleteForeverIcon />,
	},

	{
		id: 6,
		category: 'Pizza',
		img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/640px-Papa_John%27s_Pizza_logo.svg.png',
		restorant: 'Papa John’s',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 7,
		category: 'Pizza',
		img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/640px-Papa_John%27s_Pizza_logo.svg.png',
		restorant: 'Papa John’s',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 8,
		category: 'Pizza',
		img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Papa_John%27s_Pizza_logo.svg/640px-Papa_John%27s_Pizza_logo.svg.png',
		restorant: 'Papa John’s',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 9,
		category: 'Fast Food',
		img: 'http://assets.stickpng.com/images/5842996fa6515b1e0ad75add.png',
		restorant: 'Burger King',
		icon: <DeleteForeverIcon />,
	},
];

export default function RestaurantsCart() {
	const [restaurants, setRestaurants] = useState(RestaurantstData);
	const [dialog, setDialog] = useState({
		isLoading: false,
	});
	const idRestaurantsRef = useRef();

	const handleDialog = (isLoading) => {
		setDialog({
			isLoading,
		});
	};

	const handleDelete = (id) => {
		handleDialog(true);
		idRestaurantsRef.current = id;
	};

	const areUserDelete = (choose) => {
		if (choose) {
			setRestaurants(restaurants.filter((r) => r.id !== idRestaurantsRef.current));
			handleDialog(false);
		} else {
			handleDialog(false);
		}
	};

	return (
		<div className="restaurantsCardContainer">
			{restaurants &&
				restaurants.map((r) => (
					<div className="restaurantsCart">
						<img src={r.img} alt={r.name} />
						<div>
							<h2>{r.restorant}</h2>
							<h3>{r.category}</h3>
						</div>
						<div className="buttonAction restaurantsButton">
							<button onClick={() => handleDelete(r.id)}>{r.icon}</button>
						</div>
						{dialog.isLoading && <ModalDelete onDialog={areUserDelete} />}
					</div>
				))}
		</div>
	);
}
