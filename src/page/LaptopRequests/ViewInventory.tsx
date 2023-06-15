import { useEffect } from 'react'
import { BsUpcScan } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import TableLoader from '../../components/TableLoader';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { fireAlert } from '../../components/Alert';
import KPIInfoDetails from './KPIInfoDetails';
import { reset, viewInventory } from '../../features/Inventory/inventorySlice';
import moment from 'moment';



const ViewInventory = () => {
	const { id } = useParams()
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { viewdata, viewisError, viewmessage, viewisLoading } = useAppSelector((state: any) => state.inventory);
	const { updateisSuccess } = useAppSelector((state: any) => state.inventory);


	useEffect(() => {
		// @ts-ignore
		dispatch(viewInventory(id));
	}, [dispatch, id]);


	const gradeSystem = [
		{ rate: "laptop Name", definition: viewdata?.laptopName },
		{ rate: "previousUser", definition: viewdata?.previousUser },
		{ rate: "Serial Number", definition: viewdata?.serialNumber },
		{ rate: "Device Status", definition: viewdata?.deviceStatus },
		{ rate: "Status", definition: viewdata?.status },
		{ rate: "hardDrive", definition: viewdata?.hardDrive },
		{ rate: "Ram Size", definition: viewdata?.ramSize },
		{ rate: "Vendor", definition: viewdata?.vendor },
		{ rate: "Current User", definition: viewdata?.currentUser },
		{ rate: "Retrieval Date", definition: moment(viewdata?.retrievalDate).format("DD-MM-YYYY") },
		{ rate: "Date Assigned", definition: moment(viewdata?.dateAssigned).format("DD-MM-YYYY") },
		{ rate: "comment", definition: viewdata?.comment },
	]


	useEffect(() => {
		if (viewisError) {
			fireAlert("Error", viewmessage, "error");
			navigate(-1)
		} else if (updateisSuccess) {
			navigate("/inventory")
			dispatch(reset());
		}
	}, [dispatch, navigate, updateisSuccess, viewisError, viewmessage]);



	return (
		<div>
			<div id="performance">
				<section className="area-grid">
					<div className="evaluation-area">
						<div id="edit-user">
							<div className="user-info">
								<BsUpcScan size={80} />
								<div className='BiUser-user'>
									<h3>{viewdata?.laptopName}</h3>
									<p> {moment(viewdata?.createdAt).format("DD-MM-YYYY")}</p>
									<span className="app-chat--icon">
									</span>
								</div>
							</div>
						</div>
						{viewisLoading ? <TableLoader isLoading={viewisLoading} /> : ""}
						<KPIInfoDetails viewdata={viewdata} id={id} />
					</div>
					<div className="info-area">
						{/* @ts-ignore */}
						<div className="grade-system">
							<h4>Inventory Details System</h4>
							{gradeSystem.map(item =>
								<div key={item.rate} className="grade_item">
									<p>{item.rate}</p>
									<p>{item.definition}</p>
								</div>
							)}
						</div>
						<div className="kpi-summary">
							<div className="kpi-summary-title">
								<p>Assigned To</p>
							</div>
							<div className="kpi-summary-body m-t-10" >
								<p>{viewdata?.assignedTo === null ? "Has not been Assigned" : viewdata?.assignedTo}</p>
							</div>
						</div>


					</div>
				</section>
			</div>
		</div>
	)
}

export default ViewInventory
