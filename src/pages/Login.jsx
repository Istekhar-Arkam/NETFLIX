import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.png";
// import {background_banner} from "../../public/background_banner.jpg";

const Login = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters long"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <>
     <div className="mt-3 ml-16 border-2 border-white max-w-48">
      <img src={logo} alt="logo"/>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="mt-20 text-center sm:mt-28">
            <div>
              <label htmlFor="username" className="font-semibold"></label>
              <Field name="username" type="text"className="p-2 mb-5 text-black border-2 border-black max-w-3/5"placeholder="Name" />
              <ErrorMessage name="username" component="div" />
            </div>

            <div>
              <label htmlFor="email"className="font-semibold"></label>
              <Field name="email" type="email" className="p-2 mb-5 text-black border-2 border-black"placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password"className="font-semibold "></label>
              <Field name="password" type="password" className="p-2 text-black"placeholder="Password"  />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit"className="font-semibold">Sign Up</button>
          </Form>
        )}
      </Formik>
      <p>Remember Me</p>
      <p>Need help ?</p>
    </>
  );
};

export default Login;
