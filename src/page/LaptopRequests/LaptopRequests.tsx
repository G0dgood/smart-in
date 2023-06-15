import { useEffect, useState } from 'react'
import { EntriesPerPage, MainSearch, NoRecordFound, TableFetch } from '../../components/TableOptions'
import moment from 'moment';
import LaptopAssignModal from './LaptopAssignModal';
import TableLoader from '../../components/TableLoader';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { getInventory, reset } from '../../features/Inventory/inventorySlice';
import Pagination from '../../components/Pagination';
import { fireAlert } from '../../components/Alert';
import UploadInventory from '../../components/UploadInventory';

const LaptopRequests = () => {
	const dispatch = useAppDispatch();
	const { getdata, getisError, getmessage, getisLoading } = useAppSelector((state: any) => state.inventory);
	const { uploadisSuccess } = useAppSelector((state: any) => state.inventory);

	const { isSuccess } = useAppSelector((state: any) => state.inventory);

	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "10";
	});

	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);

	// @ts-ignore
	const COMPLETED = getdata?.inventory?.filter((obj: { status: string; }) => {
		// @ts-ignore
		return obj?.deviceStatus !== "Not In Use";
	});


	console.log('item', getdata)
	useEffect(() => {
		dispatch(getInventory())

	}, [dispatch])

	useEffect(() => {
		if (isSuccess) {
			dispatch(getInventory())
		}
	}, [dispatch, isSuccess])

	useEffect(() => {
		if (getisError) {
			fireAlert("error", getmessage, 'error');
			dispatch(reset());
		}
	}, [dispatch, getisError, getmessage]);

	const [data, setData] = useState([]);
	const [filter, setfilter] = useState([]);
	const [result, setResult] = useState([]);

	useEffect(() => {

		setfilter(COMPLETED)
	}, [])

	useEffect(() => {
		const results = filter?.filter((obj: any) =>
			obj?.status?.toLowerCase().includes(result)
		);
		setData(results);
	}, [filter, result]);

	const [displayData, setDisplayData] = useState([]);


	return (
		<div className='container-main-two'>
			<div  >
				<div className='allemployees-container-main' >
					<div className=' '>
						<span className='main-title'>All Inventory</span>
					</div>
					<div>
						<EntriesPerPage
							data={data}
							entriesPerPage={entriesPerPage}
							setEntriesPerPage={setEntriesPerPage}
						/>
					</div>
					<div>
						<MainSearch placeholder={'Search...     Inventories '}
							value={result}
							onChange={(e: any) => setResult(e.target.value)} />
					</div>
					<div style={{ display: "flex" }}>
						<UploadInventory />
						<LaptopAssignModal />
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
											<td className="table-datacell datatype-numeric">{item?.deviceStatus}</td>
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
						data={data}
						entriesPerPage={entriesPerPage}
						Total={"Leave"}
					/>
				</footer>
			</div>
		</div>
	)
}

export default LaptopRequests
