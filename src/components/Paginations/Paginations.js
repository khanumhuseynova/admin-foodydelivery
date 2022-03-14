import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StackStyle, PaginationStyle } from './Pagination.styled';

const BASE_URL = 'https://hn.algolia.com/api/v1/search?';

const Paginations = (props) => {
	const [pageQty, setPageQty] = useState(0);
	const [page, setPage] = useState(1);
	useEffect(() => {
		axios.get(BASE_URL).then(({ data }) => {
			setPageQty(data.nbPages);

			if (data.nbPages < page) {
				setPage(1);
				props.history.replace('/');
			}
		});
	}, [page, props.history]);

	return <StackStyle spacing={2}>{!!pageQty && <PaginationStyle count={pageQty} page={page} onChange={(_, num) => setPage(num)} variant="outlined" defaultPage={2} siblingCount={0} />}</StackStyle>;
};

export default Paginations;
