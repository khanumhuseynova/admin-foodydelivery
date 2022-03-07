import styled from 'styled-components';
import { Stack, Pagination } from '@mui/material';

export const StackCustom = styled(Stack)`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 5rem 0px;

	li {
		div {
			color: #fff !important;
			font-size: 24px;
		}
	}
`;
export const PaginationCustom = styled(Pagination).attrs(() => ({}))`
	& button {
		width: 64px;
		height: 64px;
		margin: 0 10px;
		font-size: 18px;
		border-radius: 50%;
		color: #ec5cf8;
		border: 1px solid #ec5cf8;
	}
	& .Mui-selected {
		background-color: #ec5cf8 !important;
		color: #fff !important;
	}

	@media (max-width: 650px) {
		& button {
			width: 44px;
			height: 44px;
			font-size: 14px;
		}
	}
`;
