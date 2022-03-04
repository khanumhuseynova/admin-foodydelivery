import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { SidebarData } from '../../util/SidebarData';
import EALogo from '../../image/icon/ea-logo.svg';

const Sidebar = () => {
	return (
		<div className="sidebar__container">
			<div className="sidebar">
				{SidebarData.map((item) => {
					return (
						<div key={item.id} className={item.cName}>
							<Link to={item.path}>
								{item.icon}
								<span>{item.title}</span>
							</Link>
						</div>
					);
				})}
			</div>
			<footer className="sidebar__footer">
				<img src={EALogo} alt="footer logo" className="footer__logo" />
				<p className="footer__title">Version: 1.0.</p>
				<p className="footer__subtitle">2022</p>
			</footer>
		</div>
	);
};

export default Sidebar;
