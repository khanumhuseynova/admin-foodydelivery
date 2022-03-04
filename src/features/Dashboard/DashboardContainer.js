import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './DashboardContainer.css';

const DashboardContainer = () => {
	return (
		<Box className="dashboardContainer" sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={5}>
					<Paper className="paper">
						<div className="title">Orders</div>
						<div className="orders__inner dashboard__innder">Projects by account</div>
					</Paper>
				</Grid>
				<Grid item xs={7}>
					<Paper className="paper">
						<div className="title">Total Salary</div>
						<div className="totalSalary__inner dashboard__innder">aaaaaaaaaaaa</div>
					</Paper>
				</Grid>
				<Grid item xs={7}>
					<Paper className="paper">
						<div className="title">Assigned Risks</div>
						<div className="assignedRisks__inner dashboard__innder">There are no risks assigned.</div>
					</Paper>
				</Grid>
				<Grid item xs={5}>
					<Paper className="paper">
						<div className="title">Assigned Action Items</div>
						<div className="assignedActionItems__inner dashboard__innder">There are no action items assigned.</div>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default DashboardContainer;
