import React, { useEffect, useState } from 'react'
import DashboardTable from './DashboardTable'
import Barchat from '../../components/Barchat'
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getInventory } from '../../features/Inventory/inventorySlice';
import { FcComboChart } from 'react-icons/fc';
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaStoreAlt } from 'react-icons/fa';
import { TbDeviceLaptopOff } from 'react-icons/tb';
import { VscVmActive } from 'react-icons/vsc';
import { MdOutlineLaptop } from 'react-icons/md';
import DonutChat from '../../components/DonutChat';


const Dashboard = () => {
	const dispatch = useAppDispatch();
	const { getdata, getisLoading } = useAppSelector((state: any) => state.inventory);
	useEffect(() => {
		dispatch(getInventory())

	}, [dispatch])



	const Active = getdata?.inventory?.filter((obj: { status: string; }) => {
		// @ts-ignore
		return obj?.deviceStatus !== "Not In Use";
	});
	const COMPLETED = getdata?.inventory?.filter((obj: { status: string; }) => {
		// @ts-ignore
		return obj?.deviceStatus === "Not In Use" && obj?.status === "Good";
	});
	const Repair = getdata?.inventory?.filter((obj: { status: string; }) => {
		// @ts-ignore
		return obj?.status === "Faulty" || obj?.deviceStatus === "Not In Use";
	});
	const faulty = getdata?.inventory?.filter((obj: { status: string; }) => {
		// @ts-ignore
		return obj?.status !== "Faulty";
	});


	return (
		<div >
			<div className='main'>
				<div className="cards">
					<div className="card-single">
						<div>
							<h1>{Active?.length}</h1>
							<span>Active</span>
						</div>
						<div>
							<span  ><VscVmActive size={30} /></span>
						</div>
					</div>
					<div className="card-single">
						<div>
							<h1>{COMPLETED?.length}</h1>
							<span>Store</span>
						</div>
						<div>
							<span  ><TbDeviceLaptopOff size={30} /></span>
						</div>
					</div>
					<div className="card-single">
						<div>
							<h1>{faulty?.length}</h1>
							<span>Faulty</span>
						</div>
						<div>
							<span  ><MdOutlineLaptop size={30} /></span>
						</div>
					</div>
					<div className="card-single">
						<div>
							<h1>{Repair?.length}</h1>
							<span>Repair</span>
						</div>
						<div>
							<span  >
								<FaStoreAlt size={30} />
							</span>
						</div>
					</div>

				</div>

				<div className="dashboard_graph_container">
					<div id="dashboard_graph_item1">
						<div className="barchart-grid">
							<div id="barchart-view-container">
								<h6>Category Breakdown</h6>
							</div>
							<div className="chart-wrap chat-container-bar"  >
								<DonutChat />
							</div>
						</div>
					</div>
					<div id="dashboard_graph_item2">
						<div className="barchart-grid">
							<div id="barchart-view-container">
								<h5> Inventories</h5>
								<span className="barchart-view"><div>
									<p className="view-chart">  Chart</p>
								</div>
								</span>
							</div>

						</div>
						<Barchat />
					</div>
				</div>
			</div>
			{/* <div classNameName='dashboardmainchart'>
				<div>
					<div classNameName='dashboard-first-card'>
						<Barchat />
					</div>
				</div>
				<div classNameName='dashboardmainchart-two'>
					<div classNameName='card-sup-one'><AiOutlinePieChart size={200} color='#fff' /></div>
					<div className='card-sup-two'><FcComboChart size={220} /></div>
				</div>
			</div> */}
			{/* <div className='dashboard-table mt-5'>
				<DashboardTable getdata={getdata} getisLoading={getisLoading} />
			</div> */}

		</div>
	)
}

export default Dashboard
