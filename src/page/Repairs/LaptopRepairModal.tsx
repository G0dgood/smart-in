import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Col, Form, Modal } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';

const LaptopRepairModal = () => {

	const [lgShow, setLgShow] = useState(false);
	const [fullname, setFullName] = useState("");
	const [department, setDepartment] = useState("");
	const [employeeStatus, setEmployeeStatus] = useState("");
	const [systemName, setSystemName] = useState("");
	const [systemType, setSystemType] = useState("");
	const [serialNumber, setSerialNumber] = useState("");
	const [monitor, setMonitor] = useState("");
	const [monitorSerialNumber, setMonitorSerialNumber] = useState("");
	const [HDD, setHDD] = useState("");
	const [ramSize, setRamSize] = useState("");
	const [windowsVersion, setWindowsVersion] = useState<Boolean>(false);
	const [status, setStatus] = useState("");
	const [systemCondition, setSystemCondition] = useState("");
	const [systemStatus, setSystemStatus] = useState("");
	const [showMessage, setShowMessage] = useState(false);


	const submitHandler = () => {

	}

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true);
	};

	return (
		<div>
			<Button
				className="table-link"
				onClick={() => setLgShow(true)}
			>
				<BsPlusLg size={10} color="#fff" />{" "}
				Repair Information
			</Button>
			<Modal
				size="lg"
				show={lgShow}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header>
					<span></span>
					<span className="span-center-title">Take Laptop Information</span>
					<Button style={{ color: "#fff" }} onClick={() => setLgShow(false)}>
						<MdOutlineClose size={28} />
					</Button>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={submitHandler}>
						<Form>
							<Form.Group as={Col} controlId="FirstName" className='mt-3'>
								<Form.Label>Full Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="First Name"
									value={fullname}
									onChange={(e) => setFullName(e.target.value)}
								/>
							</Form.Group>
							<div className='main-form-container'>


								<Form.Group as={Col} controlId="EmployeeStatus" className='mt-3'>
									<Form.Label>Employee Status</Form.Label>
									<Form.Control
										as="select"

										size="sm"
										value={employeeStatus}
										onChange={(e) => setEmployeeStatus(e.target.value)}>
										<option>Select Status...</option>
										<option value="Active">Active</option>
										<option value="Inactive">Inactive</option>
									</Form.Control>
								</Form.Group>
							</div>

						</Form>

						<div className='main-form-container' >
							<Form.Group as={Col} controlId="lastName" className='mt-3'>
								<Form.Label>System Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="System Name"
									value={systemName}
									onChange={(e) =>
										setSystemName(e.target.value)
									}></Form.Control>
							</Form.Group>
							<Form.Group as={Col} controlId="LaptopType" className='mt-3'>
								<Form.Label>System Type</Form.Label>
								<Form.Control
									as="select"

									size="sm"
									value={systemType}
									onChange={(e) => setSystemType(e.target.value)}>
									<option>Select System Type...</option>
									<option value="Laptop">Laptop</option>
									<option value="DeskTop">DeskTop</option>
									<option value="All-in-one">All-in-one</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="laptopRamSize" className='mt-3'>
								<Form.Label>Serial Number</Form.Label>
								<Form.Control
									type="text"
									placeholder="Serial Number"
									value={serialNumber}
									onChange={(e) =>
										setSerialNumber(e.target.value)
									}></Form.Control>
							</Form.Group>
						</div>




						<Form.Group controlId="description" className='mt-3'>
							<Form.Label>System Condition</Form.Label>
							<Form.Control
								as="textarea"
								// size={4}
								placeholder="Enter System Condition"
								style={{ backgroundColor: "#fff" }}
								value={systemCondition}
								onChange={(e) => setSystemCondition(e.target.value)}
							/>
						</Form.Group>
						<div className="btn-modal-container">
							<Button
								variant="contained"
								className="Add-btn-modal"
								type="submit"
							>

								Create
							</Button>
						</div>
					</Form>



				</Modal.Body >
			</Modal >
		</div >
	);

}

export default LaptopRepairModal
