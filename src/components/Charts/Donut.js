import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Charts.css';

const Donut = () => {
	const [state, setState] = useState({
		series: [44, 55, 41, 17, 15],
		options: {
			chart: {
				type: 'donut',
			},
			responsive: [
				{
					breakpoint: 480,
					options: {
						chart: {
							width: 200,
						},
						legend: {
							position: 'bottom',
						},
					},
				},
			],
		},
	});

	return (
		<div className="chart">
			<ReactApexChart className="reactApexChart" options={state.options} series={state.series} type="donut" />
		</div>
	);
};

export default Donut;
