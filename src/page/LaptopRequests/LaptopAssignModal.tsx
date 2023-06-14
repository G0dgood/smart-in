import { Button } from '@mui/material';
import { useEffect, useState } from 'react'
import { Col, Form, Modal, Spinner } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import { createInventory, reset } from '../../features/Inventory/inventorySlice';
import { fireAlert } from '../../components/Alert';

const LaptopAssignModal = () => {
	const dispatch = useAppDispatch();

	const { isError, message, isLoading, isSuccess } = useAppSelector((state: any) => state.inventory);
	const [show, setShow] = useState(false);
	// @ts-ignore  
	const user = JSON.parse(localStorage.getItem("userin"));



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
		if (isError) {
			fireAlert("error", message, 'error');
			dispatch(reset());
		}
		else if (isSuccess) {
			fireAlert("success", "Inventory Created", 'success');
			setShow(false)
			dispatch(reset());
		}

	}, [dispatch, isError, isSuccess, message]);





	const submitHandler = (e: any) => {
		e.preventDefault()
		// @ts-ignore  
		dispatch(createInventory(inputs))

	}

	useEffect(() => {
		setInputs((prevState: any) => {
			return ({
				...prevState,
				userId: user?.user?.id
			});
		});
	}, [setInputs, user?.user?.id]);



	const handleOnChange = (input: any, value: any) => {
		setInputs((prevState: any) => ({
			...prevState,
			[input]: value,
		}));
	};
	const laptopStatus = ["Active", "Inactive"]

	return (
		<div>
			<Button
				className="table-link"
				onClick={() => setShow(true)}
			>
				<BsPlusLg size={10} color="#fff" className="Create-plue-account" />{" "}
				Get Information
			</Button>
			<Modal
				size="lg"
				show={show}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header>
					<span></span>
					<span className="span-center-title">Create Inventory</span>
					<Button style={{ color: "#fff" }} onClick={() => setShow(false)}>
						<MdOutlineClose size={28} />
					</Button>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={submitHandler}>
						<div>
							<Form.Group as={Col} controlId="FirstName" className='mt-3'>
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
									rows={5}
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

							>
								{isLoading ? (
									<Spinner animation="border" />
								) : (
									"Create"
								)}

							</Button>
						</div>
					</Form>



				</Modal.Body >
			</Modal >
		</div >
	);

}

export default LaptopAssignModal
