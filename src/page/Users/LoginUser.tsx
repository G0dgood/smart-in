import React, { useEffect, useState } from 'react'
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions'
import TableLoader from '../../components/TableLoader'
import moment from 'moment'
import { useAppDispatch, useAppSelector } from '../../store/useStore'
import { getLoginUser, reset } from '../../features/Registration/registrationSlice'
import Pagination from '../../components/Pagination'
import { fireAlert } from '../../components/Alert'

const LoginUser = () => {
	const dispatch = useAppDispatch();
	const { dataLoginUser, isErrorLoginUser, messageLoginUser, isLoadingLoginUser } = useAppSelector((state: any) => state.registration);
	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "10";
	});
	const [displayData2, setDisplayData2] = useState([dataLoginUser?.currentUser]);




	useEffect(() => {
		if (isErrorLoginUser) {
			fireAlert("error", messageLoginUser, 'error');
			dispatch(reset());
		}
	}, [dispatch, isErrorLoginUser, messageLoginUser]);
	useEffect(() => {
		dispatch(getLoginUser())
	}, [dispatch])



	useEffect(() => {
		localStorage.setItem("reportsPerPages", entriesPerPage);
	}, [entriesPerPage]);


	const [displayData, setDisplayData] = useState([]);

	return (
		<div className='container-main-two'>
			<div  >
				<div className='allemployees-container-main' >
					<div className=' '>
						<span className='main-title'>Login User</span>
					</div>
					<div>
						<EntriesPerPage
							data={displayData2}
							entriesPerPage={entriesPerPage}
							setEntriesPerPage={setEntriesPerPage}
						/>
					</div>
					<div>

						{/* <LaptopAssignModal /> */}

					</div>
				</div>

				<section className="md-ui component-data-table">
					{isLoadingLoginUser ? <TableLoader isLoading={isLoadingLoginUser} /> : ""}
					<div className="main-table-wrapper">
						<table className="main-table-content">
							<thead className="data-table-header  " >
								<tr className="data-table-row ">
									<td className="table-datacell datatype-string">Full Name</td>
									<td className="table-datacell datatype-numeric">Role Description</td>
									<td className="table-datacell datatype-numeric">Email</td>
									<td className="table-datacell datatype-numeric">Created Date</td>
								</tr>
							</thead>
							<tbody className="data-table-content">
								{
									isLoadingLoginUser ? (
										<TableFetch colSpan={3} />
									) : displayData?.length === 0 || displayData === undefined ? (
										<NoRecordFound colSpan={3} />
									) : (displayData?.map((item: any, i: any) => (
										<tr className="data-table-row" key={i}>
											<td className="table-datacell datatype-string">{item?.firstName} {" "} {item?.LastName} </td>
											<td className="table-datacell datatype-numeric">{item?.role}</td>
											<td className="table-datacell datatype-numeric">{item?.email}</td>
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
					<Pagination
						setDisplayData={setDisplayData}
						data={displayData2}
						entriesPerPage={entriesPerPage}
						Total={"Leave"}
					/>
				</footer>
			</div>
		</div>
	)
}

export default LoginUser