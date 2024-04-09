import React from "react";
import "./Login.scss";
import Error from "../../Erorr/Error"
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import LoginSchema from "../../Schemas/LoginSchema";
import axios from "axios";
import { toast } from 'react-toastify';
export default function Login() {

  

  function handleLogin (values){
    const newData ={...values}
    delete newData.confirm_password;
    console.log(newData)
     axios.post("https://boody-magdy.vercel.app/api/users/login" , newData)
     .then(userData =>{
      if(userData.data){
        toast.success("tmm ya rayq")
      }else{
        toast.error("a7a msh tmm")
      }
     }).catch(toast.error("حدث خطأ أثناء محاولة الاتصال بالخادم"))
  }

  
  

  return (
    <div className="auth-form m-auto my-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin} 
        >
        {({ errors }) => {
          return (
            <Form>
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
              <div className="mb-3 ml-3">
                don{" ُ"}t have an acount? <Link to="/Register">Register Now</Link>
              </div>
              <div className="d-flex justify-end">
                <button type="submit">Login</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
