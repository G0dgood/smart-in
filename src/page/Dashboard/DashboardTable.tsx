import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions';
import moment from 'moment';
import Pagination from '../../components/Pagination';
import TableLoader from '../../components/TableLoader';


const DashboardTable = ({ getisLoading, getdata }: any) => {





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

				</div>
			</div>

			<section className="md-ui component-data-table">
				{getisLoading ? <TableLoader isLoading={getisLoading} /> : ""}
				<div className="main-table-wrapper">
					<table className="main-table-content">
						<thead className="data-table-header  " >
							<tr className="data-table-row ">
								<td className="table-datacell datatype-numeric">System Name</td>
								<td className="table-datacell datatype-numeric">Laptop Status</td>
								<td className="table-datacell datatype-numeric">Serial Number</td>
								<td className="table-datacell datatype-numeric">Model Name</td>
								<td className="table-datacell datatype-numeric">Previous User</td>
								<td className="table-datacell datatype-numeric">Retrieval Date</td>
								<td className="table-datacell datatype-numeric">Date Issued</td>
								<td className="table-datacell datatype-numeric">Data Updated</td>
								<td className="table-datacell datatype-numeric">...</td>
							</tr>
						</thead>
						<tbody className="data-table-content">
							{
								getisLoading ? (
									<TableFetch colSpan={14} />
								) : displayData?.length === 0 || displayData === undefined ? (
									<NoRecordFound colSpan={14} />
								) : (displayData?.map((item: any, i: any) => (
									<tr className="data-table-row" key={i}>
										<td className="table-datacell datatype-numeric">{item?.laptopName}</td>
										<td className="table-datacell datatype-numeric">{item?.laptopStatus}</td>
										<td className="table-datacell datatype-numeric">{item?.serialNumber}</td>
										<td className="table-datacell datatype-numeric">{item?.modelName} </td>
										<td className="table-datacell datatype-numeric">{item?.previousUser}</td>
										<td className="table-datacell datatype-numeric">{moment(item?.retrievalDate).format("DD-MM-YYYY")}</td>
										<td className="table-datacell datatype-numeric">{moment(item?.dateIssued).format("DD-MM-YYYY")}</td>
										<td className="table-datacell datatype-numeric">{moment(item?.updatedAt).format("DD-MM-YYYY")}</td>
										<td className="table-datacell datatype-numeric">
											<NavLink
												to={`/inventory/viewinventory/${item?.id}/view`}
												className="table-link"
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
				<Pagination
					setDisplayData={setDisplayData}
					data={getdata?.inventory}
					entriesPerPage={entriesPerPage}
					Total={"Leave"}
				/>
			</footer>
		</div>
	)
}

export default DashboardTable

