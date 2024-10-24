import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import background_banner from "../assets/background_banner.jpg";

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
      <div className="relative">
        <img
          src={background_banner}
          alt="background_banner"
          className="w-full h-screen"
        />
        <div className="absolute top-0 mt-4 ml-8 max-w-36 sm:max-w-48 sm:ml-16">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute w-full max-w-lg mt-10 bg-black rounded-lg opacity-65 top-20 h-4/6">
            <h1 className="mt-10 ml-8 text-3xl font-semibold sm:ml-24">
              Sign Up
            </h1>
          
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className="mt-5 text-center ">
                  <div>
                    <label htmlFor="username" className="font-semibold"></label>
                    <Field
                      name="username"
                      type="text"
                      className="w-full p-2 mb-5 text-lg text-black bg-white rounded max-w-64 sm:max-w-80"
                      placeholder="Name"
                    />
                    
                    <ErrorMessage name="username" component="div" />
                  </div>

                  <div>
                    <label htmlFor="email" className="font-semibold"></label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full p-2 mb-5 text-lg text-black border-2 border-black rounded max-w-64 sm:max-w-80"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="font-semibold "
                    ></label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full p-2 text-lg text-black rounded max-w-64 sm:max-w-80"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>

                  <button
                    type="submit"
                    className="w-full p-2 mt-5 bg-red-900 border-2 border-white rounded max-w-64 sm:max-w-80"
                  >
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>
          
            <div className="flex justify-between">
              <div className="flex mt-3 sm:ml-16">
                <input type="checkbox" className="ml-8 " />
                <p className="ml-1">Remember Me</p>
              </div>
              <p className="mt-3 mr-6 sm:mr-24">Need help ?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
