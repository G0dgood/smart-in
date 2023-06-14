import { Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap';
import { reset, updateInventory } from '../../features/Inventory/inventorySlice';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { fireAlert } from '../../components/Alert';
import { useNavigate } from 'react-router-dom';



const KPIInfoDetails = ({ viewdata, id }: any) => {
	// @ts-ignore  
	const user = JSON.parse(localStorage.getItem("userin"));
	const { updateisError, updatemessage, updateisLoading, updateisSuccess } = useAppSelector((state: any) => state.inventory);

	const dispatch = useAppDispatch();


	useEffect(() => {
		if (updateisError) {
			fireAlert("error", updatemessage, 'error');
			dispatch(reset());
		} else if (updateisSuccess) {
			fireAlert("success", "updated Successful", 'success');

		}
	}, [dispatch, updateisError, updateisSuccess, updatemessage]);

	const [inputs, setInputs] = useState({
		laptopName: "",
		modelName: "",
		serialNumber: "",
		laptopStatus: "",
		dateIssued: "",
		retrievalDate: "",
		previousUser: "",
		comment: "",
		userId: "",
	})


	useEffect(() => {
		setInputs((prevState: any) => {
			return ({
				...prevState,
				userId: user?.user?.id,
				laptopName: viewdata?.laptopName,
				modelName: viewdata?.modelName,
				serialNumber: viewdata?.serialNumber,
				laptopStatus: viewdata?.laptopStatus,
				dateIssued: viewdata?.dateIssued,
				retrievalDate: viewdata?.dateIssued,
				previousUser: viewdata?.previousUser,
				comment: viewdata?.comment
			});
		});
	}, [setInputs, user?.user?.id, viewdata]);



	const handleOnChange = (input: any, value: any) => {
		setInputs((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};
	const laptopStatus = ["Active", "Inactive"]

	const value = { inputs, id }
	const submitHandler = () => {
		// @ts-ignore 
		dispatch(updateInventory(value))
	}

	return (
		<form>
			<div className="evaluation-area_cont">
				<div>
					<div className="added-fields_cont">
						{/* <div className="added-field">
							<div className="factor_area">
								<p> </p>
								<div className='Grade-title'>
									<p>Weight</p>
								</div>
							</div>
							<div className="Grade-title">
								<p>Staff Score</p>
							</div>
							<div className="Grade-title">
								<p>HOD Grade</p>
							</div>
						</div> */}
						{/* <div className="added-field">
							<div className="factor_area">
								<p>Job Knowledge</p>
								<div>
									<p>{kpiData3.Weight1}</p>
								</div>
							</div>
							<div className="rate_area">
								<p>{viewdata?.job_knowledge_employee}</p>
							</div>
							<div className="btn_area">
								{viewdata?.job_knowledge_reviewer}
							</div>
						</div> */}
						{/* <div className="added-field">
							<div className="factor_area">
								<p>Efficiency</p>
								<div>
									<p>{kpiData3.Weight2}</p>
								</div>
							</div>
							<div className="rate_area">
								<p>{viewdata?.efficiency_employee}</p>
							</div>
							<div className="btn_area">
								{viewdata?.efficiency_reviewer}
							</div>
						</div> */}
						{/* <div className="added-field">
							<div className="factor_area">
								<p>Attendance</p>
								<div>
									<p>{kpiData3.Weight3}</p>
								</div>
							</div>
							<div className="rate_area">
								<p>{viewdata?.attendance_employee}</p>
							</div>
							<div className="btn_area">
								{viewdata?.attendance_reviewer}
							</div>
						</div> */}
						{/* <div className="added-field">
							<div className="factor_area">
								<p>Software Development</p>
								<div>
									<p>{kpiData3.Weight4}</p>
								</div>
							</div>
							<div className="rate_area">
								<p>{viewdata?.communication_employee}</p>
							</div>
							<div className="btn_area">
								{viewdata?.communication_reviewer}
							</div>
						</div> */}
						{/* <div className="added-field">
							<div className="factor_area">
								<p>Team work</p>
								<div>
									<p>{kpiData3.Weight5}</p>
								</div>
							</div>
							<div className="rate_area">
								<p>{viewdata?.reliability_employee}</p>
							</div>
							<div className="btn_area">
								{viewdata?.reliability_reviewer}
							</div>
						</div> */}
						{/* <div className="added-field">
							<div className="factor_area">
								<p>Debugging</p>
								<div>
									<p>{kpiData3.Weight6}</p>
								</div>
							</div>
							<div className="rate_area">
								<p>{viewdata?.collaboration_employee}</p>
							</div>
							<div className="btn_area">
								<p>{viewdata?.collaboration_reviewer}</p>
							</div>
						</div> */}
						{/* <div className="added-field">
							<div className="factor_area Grade-title">
								<p>Total </p>
								<div>
									<p>{''}</p>
								</div>
							</div>
							<div className="rate_area Grade-title">
								<p>{!Amount ? "0" : Amount}</p>
							</div>
							<div className="btn_area Grade-title">
								<p>{!hod ? "0" : hod}</p>
							</div>
						</div> */}
						<Form >
							<div>
								<Form.Group controlId="FirstName" className='mt-3'>
									<div>
										<h6 style={{ marginBottom: 10 }}>Laptop Name</h6>
										<input type="text"
											className='AddJobinput' style={{ marginBottom: "15px", }}
											value={inputs?.laptopName}
											onChange={(e) => handleOnChange("laptopName", e.target.value)}
											placeholder='Laptop Name' required />
									</div>
								</Form.Group>

							</div>

							<div className='main-form-container' >
								<div>
									<h6 style={{ marginBottom: 10 }}>Model Name</h6>
									<input type="text"
										className='AddJobinput' style={{ marginBottom: "15px", }}
										value={inputs?.modelName}
										onChange={(e) => handleOnChange("modelName", e.target.value)}
										placeholder='Model Name' required />
								</div>
								<div>
									<h6 style={{ marginBottom: 10 }}>Serial Number</h6>
									<input type="text"
										className='AddJobinput' style={{ marginBottom: "15px", }}
										value={inputs?.serialNumber}
										onChange={(e) => handleOnChange("serialNumber", e.target.value)}
										placeholder='Serial Number' required />
								</div>
							</div>

							<div   >
								<div>
									<h6 style={{ marginBottom: 10 }}>Laptop Status</h6>

									<select className="round"
										style={{ marginBottom: "20px", marginTop: "10" }}
										value={inputs?.laptopStatus}
										onChange={(e) => handleOnChange("laptopStatus", e.target.value)}>
										<option>Select Team</option>
										{laptopStatus?.map((item: any, i: any) => (
											<option key={i} value={item}>
												{item}
											</option>
										))}
									</select>
								</div>


							</div>
							<div className='main-form-container' >
								<div>
									<h6 style={{ marginBottom: 10 }}>Date Issued</h6>
									<input type="date"
										className='AddJobinput' style={{ marginBottom: "15px", }}
										value={inputs?.dateIssued}
										onChange={(e) => handleOnChange("dateIssued", e.target.value)}
										placeholder='Date Issued'
										required />
								</div>
								<div>
									<h6 style={{ marginBottom: 10 }}>Retrieval Date</h6>
									<input type="date"
										className='AddJobinput' style={{ marginBottom: "15px", }}
										value={inputs?.retrievalDate}
										onChange={(e) => handleOnChange("retrievalDate", e.target.value)}
										placeholder='Retrieval Date' required />
								</div>
							</div>

							<div   >
								<div>
									<h6 style={{ marginBottom: 10 }}>Previous User</h6>
									<input type="text"
										className='AddJobinput' style={{ marginBottom: "15px", }}
										value={inputs?.previousUser}
										onChange={(e) => handleOnChange("previousUser", e.target.value)}
										placeholder='Previous User' required />
								</div>
							</div>
							<div  >
								<div>
									<h6 style={{ marginBottom: 10 }}>Comment</h6>
									<textarea
										rows={2}
										className='AddJobinput' style={{ marginBottom: "5px", padding: "10px" }}
										value={inputs?.comment}
										onChange={(e) => handleOnChange("comment", e.target.value)}
										placeholder='Comment' required />
								</div>
							</div>

							<div className="btn-modal-container">
								<Button
									variant="contained"
									className="Add-btn-modal"
									type="submit"
									onClick={submitHandler}
								>
									{updateisLoading ? (
										<Spinner animation="border" />
									) : (
										"Update"
									)}

								</Button>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</form>
	)
}

export default KPIInfoDetails
