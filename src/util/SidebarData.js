import React from 'react';
import Dashboard from '../components/Icons/Dashboard';
import Product from '../components/Icons/Product';
import Restaurant from '../components/Icons/Restaurant';
import Category from '../components/Icons/Category';
import Order from '../components/Icons/Order';
import Offer from '../components/Icons/Offer';
import Logout from '../components/Icons/Logout';

export const SidebarData = [
	{
		id: 1,
		title: 'Dashboard',
		path: '/',
		icon: <Dashboard />,
		cName: 'nav-text',
	},
	{
		id: 2,
		title: 'Product',
		path: '/product',
		icon: <Product />,
		cName: 'nav-text',
	},
	{
		id: 3,
		title: 'Restaurant',
		path: '/restaurant',
		icon: <Restaurant />,
		cName: 'nav-text',
	},
	{
		id: 4,
		title: 'Category',
		path: '/category',
		icon: <Category />,
		cName: 'nav-text',
	},
	{
		id: 5,
		title: 'Order',
		path: '/order',
		icon: <Order />,
		cName: 'nav-text',
	},
	{
		id: 6,
		title: 'Offer',
		path: '/offer',
		icon: <Offer />,
		cName: 'nav-text',
	},
	{
		id: 7,
		title: 'Logout',
		path: '/logout',
		icon: <Logout />,
		cName: 'nav-text',
	},
];
