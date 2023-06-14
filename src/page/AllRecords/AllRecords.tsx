import { useEffect, useState } from 'react'
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions'
import moment from 'moment'
import TableLoader from '../../components/TableLoader'
import Pagination from '../../components/Pagination'
import { useAppDispatch, useAppSelector } from '../../store/useStore'
import { getInventory, reset } from '../../features/Inventory/inventorySlice'

import EmployeesDownloader from '../../components/EmployeesDownloader'
import { fireAlert } from '../../components/Alert'

const AllRecords = () => {
	const dispatch = useAppDispatch();
	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "10";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);

	const { getdata, getisError, getmessage, getisLoading } = useAppSelector((state: any) => state.inventory);
	useEffect(() => {
		dispatch(getInventory())

	}, [dispatch])

	useEffect(() => {
		if (getisError) {
			fireAlert("error", getmessage, 'error');
			dispatch(reset());
		}
	}, [dispatch, getisError, getmessage]);





	const [displayData, setDisplayData] = useState([]);

	return (
		<div className='container-main-two'>
			<div  >
				<div className='allemployees-container-main' >
					<div className=' '>
						<span className='main-title'>Report Page</span>
					</div>
					<div>
						<EntriesPerPage
							data={displayData}
							entriesPerPage={entriesPerPage}
							setEntriesPerPage={setEntriesPerPage}
						/>
					</div>
					<div>
						<EmployeesDownloader data={getdata?.inventory} />
						{/* <Button className="table-link">Download Report</Button> */}
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
		</div>
	)
}

export default AllRecords
