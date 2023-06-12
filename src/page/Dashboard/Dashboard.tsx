import React from 'react'
import DashboardTable from './DashboardTable'

const Dashboard = () => {
	return (
		<div className='container-main'>
			<div className='dashboardmainchart'>
				<div>
					<div className='dashboard-first-card'>

					</div>
				</div>
				<div className='dashboardmainchart-two'>
					<div className='card-sup-one'>fffff</div>
					<div className='card-sup-two'>ddddd</div>
				</div>
			</div>
			<div className='dashboard-table'>
				<DashboardTable />
			</div>

		</div>
	)
}

export default Dashboard
