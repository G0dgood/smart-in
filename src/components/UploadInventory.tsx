import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Modal, ProgressBar, Spinner } from 'react-bootstrap'
import { MdOutlineClose } from 'react-icons/md'
import { fireAlert } from './Alert'
import { useAppDispatch, useAppSelector } from '../store/useStore'
import { FiUpload } from "react-icons/fi";
import CSVReader from "react-csv-reader";
import { UploadInventorys, getInventory, reset } from '../features/Inventory/inventorySlice'


const UploadInventory = () => {
	const dispatch = useAppDispatch();

	const { uploadisError, uploadmessage, uploadisLoading, uploadisSuccess } = useAppSelector((state: any) => state.inventory);
	// @ts-ignore  
	const UserDetails = JSON.parse(localStorage.getItem("userin"));

	const [jsonData, setJSONData] = useState<any>([])
	const [jsonData2, setJSONData2] = useState<any>({
		laptopName: "HP Laptop",
		modelName: "AIR",
		serialNumber: "eeeeee",
		deviceStatus: "in-Use",
		dateIssued: "10/10/2022",
		retrievalDate: "10/10/2022",
		previousUser: "",
		comment: "Test",
		hardDrive: "500gb",
		ramSize: "8gb",
		status: "good",
		vendor: "apple",
		currentUser: "kingsley",
		dateAssigned: "10/10/2022",
		userId: ""
	})

	const [inputs, setInputs] = useState({
		inventoryArray: [
		]
	})


	useEffect(() => {
		setJSONData2((prevState: any) => {
			return ({
				...prevState,
				userId: UserDetails?.user?.id,

			});
		});
	}, [UserDetails?.user?.id, setJSONData2]);
	useEffect(() => {
		setInputs((prevState: any) => {
			return ({
				...prevState,
				inventoryArray: [jsonData2],

			});
		});
	}, [jsonData2, setInputs]);



	const [progress, setProgress] = useState(0);
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
	};
	const handleShow = () => setShow(true);



	const submitHandler = () => {
		const value = { inputs, setProgress }

		// @ts-ignore  
		dispatch(UploadInventorys(value))

	}


	useEffect(() => {
		if (uploadisSuccess) {
			fireAlert('Upload Inventory', "Upload Inventory is successfull", "success");
			setShow(false)
			dispatch(getInventory())
			setProgress(0)
			reset()
		} else if (uploadisError) {
			fireAlert('Upload Inventory', uploadmessage, "error");
			setProgress(0)
		}
	}, [dispatch, uploadisError, uploadisSuccess, uploadmessage])


	const resetHandler = () => {
		setProgress(0)
	}



	return (
		<div>
			<>

				<Button
					variant="contained"
					className="table-link"
					onClick={handleShow}
					style={{ marginRight: "2rem" }}
				>
					<FiUpload className="icon-space" />
					Upload
				</Button>
				<Modal
					show={show}
					size="lg"
					onHide={handleClose}
					// onClick={onClickReset}
					backdrop="static"
					keyboard={false}
					centered
					className="logic-modal">
					<Modal.Header >
						<span></span>
						<span className="span-center-title">Upload File</span>
						<Button style={{ color: "#fff" }} onClick={() => setShow(false)}>
							<MdOutlineClose size={28} />
						</Button>
					</Modal.Header>
					<Modal.Body>
						<form className="upload-form">



							<div
								className={progress === 0 ? "upload-icon" : "upload-icon-active"}>
								<i className="fas fa-cloud-upload-alt fa-4x" />
								<p>
									{progress === 0
										? "Drag and Drop file or click below"
										: `Uploading...`}
								</p>
							</div>

							{/* <input
								type="file"
								id="fileupload"
								className="file-upload-input"
								// @ts-ignore 
								onChange={handleChange} /> */}
							<CSVReader
								onFileLoaded={data => setJSONData(data)}
								parserOptions={{ header: true }} />
							<ProgressBar
								animated
								className="upload-progress-bar"
								now={progress}
							// onClick={onClickReset}
							/>


							<div className='deleteKPIHandler' style={{ marginTop: "40px" }}>
								<span className='deleteKPIHandler-mr'
								// onClick={onClickReset}
								>
									<Button type='reset' className="table-link" onClick={resetHandler}>
										Reset
									</Button>
								</span>
								<span >
									<Button className=" table-link-active" onClick={submitHandler} >
										{uploadisLoading ? <Spinner animation="border" /> : "Upload"}
									</Button>
								</span>
							</div>
						</form>
					</Modal.Body>
				</Modal>
			</>
		</div>
	)
}

export default UploadInventory