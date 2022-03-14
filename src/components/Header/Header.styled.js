import styled from 'styled-components';

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between !important;
	height: 64px;
	background: #27283c;
	color: #fff;
	border-radius: 0 0 10px 10px;
	margin: 0px 17px 16px;
`;

export const AdminContent = styled.div`
	display: flex;
	align-items: center;
	margin-right: 22px;
	div {
		margin-left: 22px;
	}
`;

export const ImgLanguage = styled.img`
	height: 41px;
	width: 41px;
	border-radius: 50%;
	cursor: pointer;
	object-fit: cover;
`;
export const ImgAvatar = styled.img`
	height: 41px;
	width: 41px;
	border-radius: 50%;
`;

export const HeaderLogo = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
	img {
		margin-left: 21px;
	}
`;
