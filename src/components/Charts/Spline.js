import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Spline = () => {
	const [state, setState] = useState({
		series: [
			{
				name: 'February',
				data: [80, 87, 110, 120, 120, 120, 140],
			},
			{
				name: 'March',
				data: [70, 77, 65, 77, 73, 80, 90],
			},
			{
				name: 'April',
				data: [12, 2, 45, 32, 34, 52, 41],
			},
		],
		options: {
			chart: {
				height: 350,
				type: 'area',
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: 'smooth',
			},
			xaxis: {
				type: 'datetime',
				categories: [
					'2018-09-19T00:00:00.000Z',
					'2018-09-19T01:30:00.000Z',
					'2018-09-19T02:30:00.000Z',
					'2018-09-19T03:30:00.000Z',
					'2018-09-19T04:30:00.000Z',
					'2018-09-19T05:30:00.000Z',
					'2018-09-19T06:30:00.000Z',
				],
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm',
				},
			},
		},
	});

	return (
		<div id="chart">
			<ReactApexChart options={state.options} series={state.series} type="area" height={258} />
		</div>
	);
};

export default Spline;
