import React from 'react';
import logo from '../../image/icon/logo-white.svg';
import en from '../../image/flag/en.png';
import avatar from '../../image/icon/user-admin.svg';
import { AdminContent, HeaderContent, ImgLanguage, HeaderLogo, ImgAvatar } from './Header.styled';
import Button from '../Button';

const Header = () => {
	return (
		<HeaderContent>
			<HeaderLogo>
				<img width="92" height="32" src={logo} />
			</HeaderLogo>
			<AdminContent>
				<Button>+ add product</Button>
				<div>
					<ImgLanguage src={en} alt="en" />
				</div>
				<div className="userAvatar">
					<ImgAvatar src={avatar} alt="en" />
				</div>
				<div>Admin</div>
			</AdminContent>
		</HeaderContent>
	);
};

export default Header;
