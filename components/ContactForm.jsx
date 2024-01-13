"use client";
import { Formik } from "formik";
import styles from "@styles/contact.module.scss";

const ContactForm = () => {
  return (
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
      }}
    >
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
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 'var(--20px)'}}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
          {errors.name && touched.name && errors.name}
          <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
          {errors.email && touched.email && errors.email}
          <input type="phone" name="phone" placeholder="Phone" onChange={handleChange} onBlur={handleBlur} value={values.phone} />
          {errors.phone && touched.phone && errors.phone}
          <select>
            <option value="">Type</option>
            <option value="">General</option>
            <option value="">Schedule Phone Call</option>
            <option value="">Project Quote</option>
            <option value=""></option>
          </select>
          <textarea name="message" placeholder="Message"/>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
