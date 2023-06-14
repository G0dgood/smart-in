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
		{ rate: 5, definition: viewdata?.laptopName },
		{ rate: 4, definition: viewdata?.previousUser },
		{ rate: 3, definition: viewdata?.serialNumber },
		{ rate: 2, definition: viewdata?.laptopStatus },
		{ rate: 1, definition: viewdata?.comment },
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
