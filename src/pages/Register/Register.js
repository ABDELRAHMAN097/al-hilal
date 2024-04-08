import React from "react";
import "./Register.scss";
import Error from "../../Erorr/Error"
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RegisterSchema from "../../Schemas/RegisterSchema";
import axios from "axios";
export default function Register() {

  function handleRegister (values){
    const newData ={...values}
    delete newData.confirm_password;
    console.log(newData)
    axios.post("https://boody-magdy.vercel.app/api/user/signup" , newData).then(response => console.log(response))
    .catch(errors => console.log(errors))
  }

  return (
    <div className="auth-form m-auto my-5">
      <Formik
        initialValues={{
          fullName: "",
          phone: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleRegister} 
        >
        {({ errors }) => {
          return (
            <Form>
              <div className="input-group">
                <label htmlFor="">Full Name</label>
                <Field type="text" name="fullName" placeholder="Full Name" />
                <Error>
                  <ErrorMessage name="name" />
                </Error>
              </div>
              <div className="input-group">
                <label htmlFor="">Phone numper</label>
                <Field type="text" name="phone" placeholder="Phone-numper" />
                <Error>
                  <ErrorMessage name="name" />
                </Error>
              </div>
              <div className="input-group">
                <label htmlFor="">Email</label>
                <Field type="text" name="email" placeholder="Email" />
                <Error>
                  <ErrorMessage name="email" />
                </Error>
              </div>
              <div className="input-group">
                <label htmlFor="">Passwoed</label>
                <Field type="password" name="password" placeholder="Passwoed" />

                <Error>
                  <ErrorMessage name="password" />
                </Error>
              </div>
              <div className="input-group">
                <label htmlFor="">Confirm Password</label>
                <Field
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Passwoed"
                />
                <Error>
                  <ErrorMessage name="confirm_password" />
                </Error>
              </div>
              <div className="mb-3 ml-3">
                already have an acount? <Link to="/login">Login Now</Link>
              </div>
              <div className="d-flex justify-end">
                <button type="submit">Register</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
