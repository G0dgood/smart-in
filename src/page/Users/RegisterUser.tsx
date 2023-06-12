import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import TableLoader from '../../components/TableLoader'
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions'

const RegisterUser = () => {
	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "10";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);








	const [displayData, setDisplayData] = useState([]);
	return (
		<div className='container-main-two'>
			<div  >
				<div className='allemployees-container-main' >
					<div className=' '>
						<span className='main-title'>Register User</span>
					</div>
					<div>
						<EntriesPerPage
							data={displayData}
							entriesPerPage={entriesPerPage}
							setEntriesPerPage={setEntriesPerPage}
						/>
					</div>
					<div>

						{/* <LaptopAssignModal /> */}

					</div>
				</div>

				<section className="md-ui component-data-table">
					{false ? <TableLoader isLoading={false} /> : ""}
					<div className="main-table-wrapper">
						<table className="main-table-content">
							<thead className="data-table-header  " >
								<tr className="data-table-row "> 

									<td className="table-datacell datatype-numeric"> </td>
									<td className='table-datacell datatype-string'>First Name</td>
									<td className="table-datacell datatype-numeric">Last Name</td>
									<td className="table-datacell datatype-numeric">Email</td>
									<td className="table-datacell datatype-numeric">Phone Number</td>
									<td className="table-datacell datatype-numeric">Client Name</td>
									<td className="table-datacell datatype-numeric">Role</td>
									<td className="table-datacell datatype-numeric">isActive</td>
									<td className="table-datacell datatype-numeric">Edit User</td>

								</tr>
							</thead>
							<tbody className="data-table-content">
								{
									false ? (
										<TableFetch colSpan={14} />
									) : displayData?.length === 0 || displayData === undefined ? (
										<NoRecordFound colSpan={14} />
									) : (displayData?.map((item: any, i: any) => (
										<tr className="data-table-row" key={i}> 
											<td className="table-datacell datatype-string"> </td>
											<td className="table-datacell datatype-string">{item.fullname}</td>
											<td className="table-datacell datatype-numeric">{item.department}</td>
											<td className="table-datacell datatype-numeric">{item.employeeStatus}</td>
											<td className="table-datacell datatype-numeric">{item.systemName}</td>
											<td className="table-datacell datatype-numeric">{item.systemType}</td>
											<td className="table-datacell datatype-numeric">{item.serialNumber}</td>
											<td className="table-datacell datatype-numeric">{item.monitor}</td>
											<td className="table-datacell datatype-numeric">{item.monitorSerialNumber}</td> 
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
		</div>
	)
}

export default RegisterUser