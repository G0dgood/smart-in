/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/useStore';
import * as yup from 'yup'
import { Formik } from 'formik';
import { Spinners } from '../../components/TableOptions';
import toast, { Toaster } from 'react-hot-toast';
import { login, reset } from '../../features/Auth/authSlice';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch()

	// @ts-ignore  
	const userInfo = JSON.parse(localStorage.getItem("userin"));
	const { isLoading, isError, message } = useAppSelector((state: { auth: any; }) => state.auth)

	const [showModal, setShowModal] = useState(false)




	useEffect(() => {
		// @ts-ignore  
		if (userInfo) {
			// navigate('/')
			window.location.replace("/");
		}
	}, [userInfo, dispatch, navigate])




	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		dispatch(reset())
	}, [isError, message, dispatch,])


	// const [passwordShown, setPasswordShown] = useState(true);
	// const togglePasswordVisiblity = () => {
	// 	setPasswordShown(passwordShown ? false : true);
	// };


	const onSubmitFormlogin = (values: any) => {
		const value = { ...values };
		// console.log('value', value)
		// @ts-ignore
		dispatch(login(value))
	}


	const loginValidationSchema = yup.object().shape({
		email: yup
			.string()
			.email("Please enter valid email")
			.required('Email Address is Required'),
		password: yup.string().min(6, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
	})
	return (
		<div>
			<Toaster
				position="top-center"
				toastOptions={{
					className: "",
					duration: 5000,
					success: {
						duration: 5000,
					},
				}}
			/>
			<section className="login">
				<div className="login_box">
					<div className="left">
						<div className="contact">
							<Formik
								validationSchema={loginValidationSchema}
								initialValues={{
									email: '',
									password: ''
								}}
								onSubmit={onSubmitFormlogin} >
								{({ handleChange, handleSubmit, errors, values,
								}) => (
									<form >
										<h3>SIGN IN</h3>
										<input
											placeholder="USERNAME"
											type="text"
											name="username"
											value={values.email}
											onChange={handleChange('email')} />
										{errors.email && <p className="formik-errors">{errors.email}</p>}
										<input
											placeholder="PASSWORD"
											type={"PASSWORD"}
											name="pass"
											value={values.password}
											onChange={handleChange('password')} />
										{errors.password && <p className="formik-errors">{errors.password}</p>}
										{/* @ts-ignore */}
										<button className="submit" disabled={isLoading} onClick={handleSubmit}>
											{isLoading ? <Spinners size={"sm"} /> : 'Sign In'}</button>
									</form>
								)}
							</Formik>
						</div>
					</div>
					<div className="right">
						<div className="right-text">
							<h2>SMART INVENTORY</h2>
							<h5>ASSET MANEGER</h5>
						</div>
						<div className="right-inductor"><img src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft" alt="" /></div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Login
