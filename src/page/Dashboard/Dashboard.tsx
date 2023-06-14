import React, { useEffect } from 'react'
import DashboardTable from './DashboardTable'
import Barchat from '../../components/Barchat'
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getInventory } from '../../features/Inventory/inventorySlice';
import { FcComboChart } from 'react-icons/fc';
import { AiOutlinePieChart } from 'react-icons/ai';


const Dashboard = () => {
	const dispatch = useAppDispatch();
	const { getdata, getisLoading } = useAppSelector((state: any) => state.inventory);
	useEffect(() => {
		dispatch(getInventory())

	}, [dispatch])

	return (
		<div className='container-main'>
			<div className='dashboardmainchart'>
				<div>
					<div className='dashboard-first-card'>
						<Barchat />
					</div>
				</div>
				<div className='dashboardmainchart-two'>
					<div className='card-sup-one'><AiOutlinePieChart size={200} color='#fff' /></div>
					<div className='card-sup-two'><FcComboChart size={220} /></div>
				</div>
			</div>
			<div className='dashboard-table mt-5'>
				<DashboardTable getdata={getdata} getisLoading={getisLoading} />
			</div>

		</div>
	)
}

export default Dashboard
