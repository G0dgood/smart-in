import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions';
import moment from 'moment';
import { BsCheckCircle } from 'react-icons/bs';

const DashboardTable = () => {



	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "10";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);








	const [displayData, setDisplayData] = useState([]);

	return (
		<div  >
			<div className='allemployees-container-main' >
				<div className=' '>
					<span className='main-title'>Recent System Requests</span>
				</div>
				<div>
					<EntriesPerPage
						data={displayData}
						entriesPerPage={entriesPerPage}
						setEntriesPerPage={setEntriesPerPage}
					/>
				</div>
				<div>

					{/* <ApplyForLeave /> */}

				</div>
			</div>

			<section className="md-ui component-data-table">
				{/* {false ? <TableLoader isLoading={false} /> : ""} */}
				<div className="main-table-wrapper">
					<table className="main-table-content">
						<thead className="data-table-header  " >
							<tr className="data-table-row ">
								<td className="table-datacell datatype-string">Full Name</td>
								<td className="table-datacell datatype-numeric">Department</td>
								<td className="table-datacell datatype-numeric">Employee Status</td>
								<td className="table-datacell datatype-numeric">System Name</td>
								<td className="table-datacell datatype-numeric">Laptop</td>
								<td className="table-datacell datatype-numeric">Serial Number</td>
								<td className="table-datacell datatype-numeric">Monitor</td>
								<td className="table-datacell datatype-numeric">Monitor Serial Number</td>
								<td className="table-datacell datatype-numeric">HDD Size</td>
								{/* <td className="table-datacell datatype-numeric">Windows Version</td>
								<td className="table-datacell datatype-numeric">RAM Size</td>
								<td className="table-datacell datatype-numeric">Status</td>
								<td className="table-datacell datatype-numeric">System Status</td> */}
								<td className="table-datacell datatype-numeric">View</td>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{
								false ? (
									<TableFetch colSpan={10} />
								) : displayData?.length === 0 || displayData === undefined ? (
									<NoRecordFound colSpan={10} />
								) : (displayData?.map((item: any, i: any) => (
									<tr className="data-table-row" key={i}>
										<td className="table-datacell datatype-string">{item.fullname}</td>
										<td className="table-datacell datatype-numeric">{item.department}</td>
										<td className="table-datacell datatype-numeric">{item.employeeStatus}</td>
										<td className="table-datacell datatype-numeric">{item.systemName}</td>
										<td className="table-datacell datatype-numeric">{item.systemType}</td>
										<td className="table-datacell datatype-numeric">{item.serialNumber}</td>
										<td className="table-datacell datatype-numeric">{item.monitor}</td>
										<td className="table-datacell datatype-numeric">{item.monitorSerialNumber}</td>
										<td className="table-datacell datatype-numeric">{item.HDD}GB</td>
										{/* <td className="table-datacell datatype-numeric">{item.windowsVersion}</td>
										<td className="table-datacell datatype-numeric">{item.ramSize}GB</td>
										<td className="table-datacell datatype-numeric">{item.status}</td>
										<td className="table-datacell datatype-numeric">{item.systemStatus}</td> */}
										<td className="table-datacell datatype-numeric">
											<NavLink
												to={`/laptopinform/${item._id}/update`}
												className="update-btn rounded-5"
												style={{ background: "#E2522E", boxShadow: "none" }}>
												View
											</NavLink>
										</td>
									</tr>
								)))}

						</tbody>
					</table>
				</div>

			</section>
			<footer className="main-table-footer">
				{/* <Pagination
					setDisplayData={setDisplayData}
					data={allLeavedata?.data}
					entriesPerPage={entriesPerPage}
					Total={"Leave"}
				/> */}
			</footer>
		</div>
	)
}

export default DashboardTable

