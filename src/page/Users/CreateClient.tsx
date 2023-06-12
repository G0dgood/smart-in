import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions'
import TableLoader from '../../components/TableLoader'
import moment from 'moment'

const CreateClient = () => {
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
											<td className="table-datacell datatype-string">{item.fullname}</td>
											<td className="table-datacell datatype-numeric">{item.department}</td>
											<td className="table-datacell datatype-numeric">{item.employeeStatus}</td>
											<td className="table-datacell datatype-numeric">{item.systemName}</td>

											<td className="table-datacell datatype-numeric">{item?.clientCode}</td>
											<td className="table-datacell datatype-numeric">{item?.client}</td>
											<td className="table-datacell datatype-numeric">
												{moment(item?.createdAt).format("DD-MM-yyyy")}
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

export default CreateClient