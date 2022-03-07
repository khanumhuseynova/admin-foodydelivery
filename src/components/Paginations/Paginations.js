import React from 'react';
import { StackCustom, PaginationCustom } from './Pagination.styled';

const Paginations = () => {
	return (
		<StackCustom spacing={2}>
			<PaginationCustom count={10} page={1} variant="outlined" defaultPage={2} siblingCount={0} />
		</StackCustom>
	);
};

export default Paginations;
