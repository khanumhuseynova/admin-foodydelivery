import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
	const [select, setSelect] = useState();
	const options = ['Catagory type', 'Fast Food', 'Pizza', 'Coffee'];
	return (
		<div className="dropdown">
			<select className="dropdown-content" onChange={(e) => setSelect(e.target.value)}>
				{options.map((option) => (
					<option
						onClick={() => {
							setSelect(option);
						}}
						className="dropdown-item"
					>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
