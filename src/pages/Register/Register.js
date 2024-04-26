/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import "./Register.scss";
import Error from "../../Erorr/Error"
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RegisterSchema from "../../Schemas/RegisterSchema";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners";
export default function Register() {
  const [loading, setLoading] = useState(false);

//#######################################################
const navigate = useNavigate()

function handleRegister(values) {
  setLoading(true);
  const newData = { ...values };
  delete newData.confirm_password;
  console.log(newData);
  axios
    .post("https://boody-magdy.vercel.app/api/users/signup", newData)
    .then((response) => {
      toast.success(`تم  انشاء اكونت بنجاح`, { autoClose: 2000 });
      navigate("/login");
      setLoading(false);
      console.log(response);
    })
    .catch((errors) => console.log(errors))
    .finally(() => {
      setLoading(false);
    });
}

  return (
    <div className="auth-form m-auto my-5">
       {loading && ( // عرض شاشة الانتظار اذا كانت الحاله true
       <div className="loading-overlay">
       <RingLoader color={"#3fbbc0"} loading={loading} size={150} className="loading-spinner" />
     </div>
      )}
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
              <div className="input-login">
                <label htmlFor="">Full Name</label>
                <Field type="text" name="fullName" placeholder="Full Name" />
                <Error>
                  <ErrorMessage name="name" />
                </Error>
              </div>
              <div className="input-login">
                <label htmlFor="">Phone numper</label>
                <Field type="text" name="phone" placeholder="Phone-numper" />
                <Error>
                  <ErrorMessage name="name" />
                </Error>
              </div>
              <div className="input-login">
                <label htmlFor="">Email</label>
                <Field type="text" name="email" placeholder="Email" />
                <Error>
                  <ErrorMessage name="email" />
                </Error>
              </div>
              <div className="input-login">
                <label htmlFor="">Passwoed</label>
                <Field type="password" name="password" placeholder="Passwoed" />

                <Error>
                  <ErrorMessage name="password" />
                </Error>
              </div>
              <div className="input-login">
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
                already have an acount? <Link className="moveTo" to="/login">Login Now</Link>
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
