import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './pages/dashboard';
import ProductsPage from './pages/products';
import RestaurantsPage from './pages/restaurants';
import CategoryPage from './pages/category';
import OrdersPage from './pages/orders';
import OfferPage from './pages/offer';
import LoginPage from './pages/login';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<div className="browserRouter">
					<Sidebar className="sidebar" />
					<Routes>
						<Route path="/" element={<DashboardPage />} />
						<Route path="/product" element={<ProductsPage />} />
						<Route path="/restaurant" element={<RestaurantsPage />} />
						<Route path="/category" element={<CategoryPage />} />
						<Route path="/order" element={<OrdersPage />} />
						<Route path="/offer" element={<OfferPage />} />
						<Route path="/logout" element={<LoginPage />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
