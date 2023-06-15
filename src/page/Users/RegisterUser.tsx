import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import TableLoader from '../../components/TableLoader'
import { EntriesPerPage, NoRecordFound, TableFetch } from '../../components/TableOptions'
import { getallReguser, reset } from '../../features/Registration/registrationSlice'
import { useAppDispatch, useAppSelector } from '../../store/useStore'
import { fireAlert } from '../../components/Alert'
import Pagination from '../../components/Pagination'
import RegisterModal from '../../components/RegisterModal'
import EditRegisterModal from '../../components/EditRegisterModal'

const RegisterUser = () => {
	// --- Pagination --- //
	const [entriesPerPage, setEntriesPerPage] = useState(() => {
		return localStorage.getItem("reportsPerPages") || "10";
	});

	const dispatch = useAppDispatch();
	const { dataAll, isErrorAll, messageAll, isLoadingALl } = useAppSelector((state: any) => state.registration);
	const { isSuccess } = useAppSelector((state: any) => state.registration)

	useEffect(() => {
		dispatch(getallReguser());
	}, [dispatch]);

	useEffect(() => {
		if (isErrorAll) {
			fireAlert("error", messageAll, 'error');
			dispatch(reset());
		} else if (isSuccess) {
			dispatch(getallReguser());
		}
	}, [dispatch, isErrorAll, isSuccess, messageAll]);




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
							data={dataAll}
							entriesPerPage={entriesPerPage}
							setEntriesPerPage={setEntriesPerPage}
						/>
					</div>
					<div>
						<RegisterModal />
					</div>
				</div>
				<section className="md-ui component-data-table">
					{isLoadingALl ? <TableLoader isLoading={isLoadingALl} /> : ""}
					<div className="main-table-wrapper">
						<table className="main-table-content">
							<thead className="data-table-header  " >
								<tr className="data-table-row ">
									<td className='table-datacell datatype-string'>First Name</td>
									<td className="table-datacell datatype-numeric">Last Name</td>
									<td className="table-datacell datatype-numeric">Email</td>
									<td className="table-datacell datatype-numeric">Phone Number</td>
									<td className="table-datacell datatype-numeric">Role</td>
									<td className="table-datacell datatype-numeric">isActive</td>
									<td className="table-datacell datatype-numeric">Edit User</td>

								</tr>
							</thead>
							<tbody className="data-table-content">
								{
									isLoadingALl ? (
										<TableFetch colSpan={9} />
									) : displayData?.length === 0 || displayData === undefined ? (
										<NoRecordFound colSpan={9} />
									) : (displayData?.map((item: any, i: any) => (
										<tr className="data-table-row" key={i}>
											<td className="table-datacell datatype-numeric"> {item.firstName} 	</td>
											<td className="table-datacell datatype-numeric"> 	{item.LastName} 	</td>
											<td className="table-datacell datatype-numeric"> {item.email} </td>
											<td className="table-datacell datatype-numeric"> {item.phoneNumber} </td>
											<td className="table-datacell datatype-string"> 	{item.role} </td>
											<td className="table-datacell datatype-numeric">
												<button className="table-link-active">
													{item.isEnabled === true ? "Active" : "Deactivated"}
												</button>
											</td>
											<td className="table-datacell datatype-numeric">
												{/* <NavLink
													to={`/laptopinform/${item._id}/update`}
													className="table-link"
													style={{ background: "#E2522E", boxShadow: "none" }}>
													View
												</NavLink> */}
												<EditRegisterModal />
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
						data={dataAll}
						entriesPerPage={entriesPerPage}
						Total={"Registered User"}
					/>
				</footer>
			</div>
		</div>
	)
}

export default RegisterUser

