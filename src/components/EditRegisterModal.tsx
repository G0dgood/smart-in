import React, { useEffect, useState } from 'react'
import { Spinners } from './TableOptions';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/useStore';
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import { Modal } from 'react-bootstrap';
import { MdOutlineClose } from 'react-icons/md';
import { reset } from '../features/Registration/registrationSlice';
import * as yup from 'yup'

const EditRegisterModal = () => {
	const dispatch = useAppDispatch()

	const { isError, isSuccess, message, isLoading } = useAppSelector((state: { registration: any; }) => state.registration)

	const [showModal, setLgShow] = useState(false);




	const onSubmitRegistration = (values: any) => {
		const value: any = { ...values };
		// @ts-ignore 
		dispatch(userRegistration(value))
	}





	const loginValidationSchema = yup.object().shape({
		firstName: yup.string().required('First Name is Required'),
		LastName: yup.string().required('Last Name is Required'),
		email: yup.string().email("Please enter valid email").required('Email Address is Required'),
		role: yup.string().required('Please select role'),
		phoneNumber: yup.string().min(9, ({ min }) => `Password must be at least ${min} characters`)
			.required('Phone Number is required'),
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
	})


	useEffect(() => {
		if (isError) {
			toast.error(message);
		} else if (isSuccess) {
			toast.success("User Edited!");
			setLgShow(!showModal);
		}
		dispatch(reset())
	}, [isError, message, dispatch, isSuccess, showModal])


	return (
		<>

			<Button
				className="table-link"
				style={{ height: "2rem" }}
				onClick={() => setLgShow(true)}>
				EDIT USER
			</Button>
			{showModal && (
				<Modal
					size="lg"
					show={showModal}
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header>
						<span></span>
						<span className="span-center-title">Edit User</span>
						<Button style={{ color: "#fff" }} onClick={() => setLgShow(false)}>
							<MdOutlineClose size={28} />
						</Button>
					</Modal.Header>
					<Modal.Body>
						<div className="pop_box">
							<div className="modal_container">
								<div className="modal_header">
									<h2> </h2>
									<div className="close_button">
									</div>
								</div>
								<Formik
									validationSchema={loginValidationSchema}
									initialValues={{
										firstName: '',
										LastName: '',
										email: '',
										phoneNumber: '',
										role: '',
										password: '',
									}}
									onSubmit={onSubmitRegistration}
								>
									{({ handleChange, handleSubmit, errors, values,
									}) => (
										<div>
											<div className="container">
												<div className="title">Update User</div>
												<form >
													<div className="user__details">
														<div className="input__box">
															<span className="details">First Name</span>
															<input type="text" placeholder="E.g: John Smith"
																value={values.firstName}
																onChange={handleChange("firstName")}
																required />
															{errors.firstName && <p className="formik-errors">{errors.firstName}</p>}
														</div>
														<div className="input__box">
															<span className="details">Last Name</span>
															<input type="text" placeholder="johnWC98"
																value={values.LastName}
																onChange={handleChange("LastName")}
																required />
															{errors.LastName && <p className="formik-errors">{errors.LastName}</p>}
														</div>
														<div className="input__box">
															<span className="details">Email</span>
															<input type="email" placeholder="johnsmith@hotmail.com"
																value={values.email}
																onChange={handleChange('email')}
																required />
															{errors.email && <p className="formik-errors">{errors.email}</p>}
														</div>
														<div className="input__box">
															<span className="details">Phone Number</span>
															<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789"
																value={values.phoneNumber}
																onChange={handleChange("phoneNumber")}
																required />
															{errors.phoneNumber && <p className="formik-errors">{errors.phoneNumber}</p>}
														</div>
														<div className="input__box">
															<span className="details">Password</span>
															<input type="text" placeholder="123.eg"
																value={values.password}
																onChange={handleChange("password")} required />
															{errors.password && <p className="formik-errors">{errors.password}</p>}
														</div>

														<div className="input__box">
															<span className="details">Role</span>
															<select name="country" id="register-select"
																value={values.role}
																onChange={handleChange("role")}>
																<option value="">Select Role</option>
																<option value="IT_SUPPORT">IT SUPPORT</option>
																<option value="ADMIN">ADMIN</option>
															</select>
															{errors.role && <p className="formik-errors">{errors.role}</p>}
														</div>
													</div>

													<div className="Register-button-container">
														{isLoading ? <Spinners size={"sm"} /> :
															// @ts-ignore
															<Button
																onClick={handleSubmit}
																className="table-link"
																type="submit"
																// @ts-ignore
																id="primary"
																disabled={isLoading}
															>
																{"Update"}
															</Button>}
													</div>
												</form>
											</div>
										</div>
									)}
								</Formik>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			)}
		</>
	)
}
export default EditRegisterModal
