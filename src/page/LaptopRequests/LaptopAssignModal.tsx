import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Col, Form, Modal } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';

const LaptopAssignModal = () => {

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
				className="subone-header-flex-btn"
				onClick={() => setLgShow(true)}
			>
				<BsPlusLg size={10} color="#fff" className="Create-plue-account" />{" "}
				Get Information
			</Button>
			<Modal
				size="lg"
				show={lgShow}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header>
					<span></span>
					<span className="span-center-title">Create System Information</span>
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
								<Form.Group as={Col} controlId="formGridDepartment" className='mt-3'>
									<Form.Label>Department</Form.Label>
									<Form.Control
										as="select"
										size="sm"

										value={department}
										onChange={(e) => setDepartment(e.target.value)}>
										<option value="">Select...</option>
										<option value="Admin">Admin</option>
										<option value="Sales">Sales</option>
										<option value="MIS">MIS</option>
										<option value="Projects">Projects</option>
										<option value="Operations">Operations</option>
										<option value="QA">QA</option>
										<option value="Customer Service">
											Customer Service
										</option>
										<option value="Human Resources">Human Resources</option>
										<option value="IT">IT</option>
										<option value="Training & Development">
											Training & Development
										</option>
										<option value="Accounts">Accounts</option>
										<option value="Enugu - MCN">Enugu - MCN</option>
										<option value="Branch">Branch</option>
										<option value="Multichoice">Multichoice</option>
										<option value="Ntel">Ntel</option>
										<option value="Fairmoney">Fairmoney</option>
										<option value="KYC">KYC</option>
										<option value="Sim swap">Sim swap</option>
										<option value="Enterprise">Total</option>
										<option value="Access bank">Access bank</option>
										<option value="OUTCESS">OUTCESS</option>
									</Form.Control>
								</Form.Group>

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
						<div className='main-form-container'>
							<Form.Group as={Col} controlId="LaptopType" className='mt-3'>
								<Form.Label>Monitor</Form.Label>
								<Form.Control
									type="text"
									placeholder="Monitor"
									value={monitor}
									disabled={
										systemType === "Laptop" || systemType === "All-in-one"
									}
									onChange={(e) =>
										setMonitor(e.target.value)
									}></Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="SerialNumber" className='mt-3'>
								<Form.Label>Monitor Serial Number</Form.Label>
								<Form.Control
									type="text"
									placeholder="Monitor Serial Number"
									value={monitorSerialNumber}
									disabled={
										systemType === "Laptop" || systemType === "All-in-one"
									}
									onChange={(e) =>
										setMonitorSerialNumber(e.target.value)
									}></Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="RamSize">
								<Form.Label>HDD Size</Form.Label>
								<Form.Control
									type="text"
									placeholder="HDD Size"
									value={HDD}
									onChange={(e) => setHDD(e.target.value)}></Form.Control>
							</Form.Group>
						</div>

						<div className='main-form-container'>
							<Form.Group as={Col} controlId="LaptopType" className='mt-3'>
								<Form.Label>Windows Version</Form.Label>
								<Form.Control
									as="select"

									size="sm"
								// value={windowsVersion}
								// onChange={(e) => setWindowsVersion(e.target.value)}
								>
									<option value="">Select Status...</option>
									<option value="Windows 7 ">Windows 7 </option>
									<option value="Windows 8  ">Windows 8 </option>
									<option value="Windows 10">Windows 10</option>
									<option value="Windows 11">Windows 11</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="laptopRamSize" className='mt-3'>
								<Form.Label>Ram Size</Form.Label>
								<Form.Control
									as="select"

									size="sm"
									value={ramSize}
									onChange={(e) => setRamSize(e.target.value)}>
									<option value="">Select Ram Size...</option>
									<option value="2">2gb </option>
									<option value="4">4gb </option>
									<option value="6">6gb</option>
									<option value="8">8gb</option>
									<option value="10">10gb</option>
									<option value="12"> 12gb</option>
									<option value="16"> 16gb</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="Status" className='mt-3'>
								<Form.Label>Status</Form.Label>
								<Form.Control
									as="select"

									size="sm"
									value={status}
									onChange={(e) => setStatus(e.target.value)}>
									<option value="">Select Status...</option>
									<option value="Good ">Good </option>
									<option value="Faulty">Faulty</option>
								</Form.Control>
							</Form.Group>

							<Form.Group as={Col} controlId="System Status" className='mt-3'>
								<Form.Label>System Status</Form.Label>
								<Form.Control
									as="select"

									size="sm"
									value={systemStatus}
									onChange={(e) => setSystemStatus(e.target.value)}>
									<option value="">Select Status...</option>
									<option value="In Use">In Use </option>
									<option value="Not In Use">Not In Use</option>
								</Form.Control>
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
						{/* <Button
							className="applyleave-btn mb-2 mr-3"

							// disabled={loadingCreate && true}
							type="submit"
							value="Create">
							{/* {loadingCreate ? "Creating..." : "Create"} */}
						{/* </Button>
						<Button
							className="mb-2"

							onClick={handleClose}>
							Close
						</Button> */}
						<div className="btn-modal-container">
							<Button
								variant="contained"
								className="Add-btn-modal"
								type="submit"
							>
								{/* {createisLoading ? (
									<Spinner animation="border" />
								) : (
									"Create Project"
								)} */}
								Create
							</Button>
						</div>
					</Form>
					{/* <div className="btn-modal-container">
											<Button
												variant="contained"
												className="Add-btn-modal"
												type="submit"
											>
												{createisLoading ? (
													<Spinner animation="border" />
												) : (
													"Create Project"
												)}
											</Button>
										</div> */}


				</Modal.Body >
			</Modal >
		</div >
	);

}

export default LaptopAssignModal
