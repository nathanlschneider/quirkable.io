"use client";
import { Formik } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";
import FullScreenDialog from "./FullScreenDialog";
import styles from "@styles/contact.module.scss";

const ContactButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => {
		setTimeout(() => {
			document.querySelector(":root").style.setProperty("--mix-mode", isOpen ? "none" : "difference");
		}, 200);
		setIsOpen(!isOpen);
	};
	const container = {
		hidden: {
			opacity: 0,
		},

		show: {
			opacity: 1,
		},
	};

	return (
		<>
			<div onClick={handleOpen} className={`${styles.contact_btn} btn`}>
				Contact
			</div>
			<FullScreenDialog
				handleOpen={handleOpen}
				isOpen={isOpen}
				children={
					<motion.div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
						<h1>Anywhere in your app!</h1>
						<Formik
							initialValues={{ email: "", password: "" }}
							validate={(values) => {
								const errors = {};
								if (!values.email) {
									errors.email = "Required";
								} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
									errors.email = "Invalid email address";
								}
								return errors;
							}}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 400);
							}}>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								handleSubmit,
								isSubmitting,
								/* and other goodies */
							}) => (
								<form onSubmit={handleSubmit}>
									<input
										type='email'
										name='email'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
									/>
									{errors.email && touched.email && errors.email}
									<input
										type='password'
										name='password'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.password}
									/>
									{errors.password && touched.password && errors.password}
									<button type='submit' disabled={isSubmitting}>
										Submit
									</button>
								</form>
							)}
						</Formik>
					</motion.div>
				}
			/>
		</>
	);
};

export default ContactButton;
