import React, { useEffect, useState } from 'react'
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions'
import moment from 'moment'
import TableLoader from '../../components/TableLoader'

const AllRecords = () => {

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
						<span className='main-title'>Create Client</span>
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
									<td className="table-datacell datatype-numeric">Client code</td>
									<td className="table-datacell datatype-numeric">Client</td>
									<td className="table-datacell datatype-numeric">Date Created</td>

									<td className='table-datacell datatype-numeric'>Reference</td>
									<td className='table-datacell datatype-numeric'>Affected Users</td>
									<td className='table-datacell datatype-numeric'>Created By</td>
									<td style={{ color: "red", fontWeight: "bold" }}>
										Created At
									</td>
									<td style={{ color: "green", fontWeight: "bold" }}>
										Closed At
									</td>
									<td className='table-datacell datatype-numeric'>Email</td>
									<td className='table-datacell datatype-numeric'>Phone Number</td>
									<td className='table-datacell datatype-numeric'>Role</td>
									<td className='table-datacell datatype-numeric'>Issue Description</td>
									<td className='table-datacell datatype-numeric'>Issue Category</td>
									<td className='table-datacell datatype-numeric'>Severity</td>
									<td className='table-datacell datatype-numeric'>Ticket Type</td>
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
											{/* <td className="table-datacell datatype-string">{item.fullname}</td>
											<td className="table-datacell datatype-numeric">{item.department}</td>
											<td className="table-datacell datatype-numeric">{item.employeeStatus}</td>
											<td className="table-datacell datatype-numeric">{item.systemName}</td>

											<td className="table-datacell datatype-numeric">{item?.clientCode}</td>
											<td className="table-datacell datatype-numeric">{item?.client}</td>
											<td className="table-datacell datatype-numeric">
												{moment(item?.createdAt).format("DD-MM-yyyy")}
											</td> */}

											<td data-title="Reference">
												{" "}
												{/* {item.ticketType === "INCIDENT" ? (
													<FcHighPriority size={20} />
												) : item.ticketType === "SERVICE" ? (
													<FcServices size={20} />
												) : (
													<FcDoughnutChart size={20} />
												)} */}
											</td>
											<td data-title="Reference">
												{item?.ticketType === "INCIDENT"
													? "INC - " + item?.ticketId
													: item?.ticketType === "SERVICE"
														? "SRV - " + item?.ticketId
														: "CHG - " + item?.ticketId}
											</td>
											<td data-title="affected items">
												{!item?.affecteditems ? (
													<span
														style={{ color: "#005b90", fontWeight: "bold" }}>
														ALL
													</span>
												) : (
													item?.affecteditems
												)}
											</td>
											<td data-title="firstName">
												{item?.createdBy?.firstname}
												{item?.createdBy?.lastname}
											</td>
											<td
												data-title="created at"
												style={{ color: "red", fontWeight: "bold" }}>
												{moment(item?.createdAt).format(
													"YYYY-MM-DD HH:mm:ss"
												)}
											</td>
											<td
												data-title="created at"
												style={{ color: "green", fontWeight: "bold" }}>
												{!item?.closedAt ? (
													<span
														style={{ color: "#005b90", fontWeight: "bold" }}>
														Not Yet Closed
													</span>
												) : (
													moment(item?.closedAt).format("YYYY-MM-DD HH:mm:ss")
												)}
											</td>
											<td data-title="email">{item?.createdBy?.email}</td>
											<td data-title="phone number">
												{item?.createdBy?.phoneNumber}
											</td>
											<td data-title="role">{item?.role}</td>
											<td data-title="issue description">
												{/* <ModalImage text={"View"} data={item} /> */}
											</td>
											<td data-title="issue Category">
												{item?.issueCategory}
											</td>
											<td data-title="severity">
												{item?.severity === "High" ? (
													<button className="severity-high">
														{item?.severity}
													</button>
												) : item?.severity === "Medium" ? (
													<button className="severity-medium">
														{item?.severity}
													</button>
												) : item?.severity === "Critical" ? (
													<button className="severity-Critical">
														{item?.severity}
													</button>
												) : item?.severity === "Low" ? (
													<button className="severity-low">
														{item?.severity}
													</button>
												) : (
													<button className="severity-low">Low</button>
												)}
											</td>
											<td data-title="ticket type">{item?.ticketType}</td>
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

export default AllRecords
