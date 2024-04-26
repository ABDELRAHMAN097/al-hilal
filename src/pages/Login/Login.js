import React, { useState } from "react";
import "./Login.scss";
import Error from "../../Erorr/Error"
import { Link } from "react-router-dom";

import { ErrorMessage, Field, Form, Formik } from "formik";
import LoginSchema from "../../Schemas/LoginSchema";
import axios from "axios";
import { toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import $AuthData from '../../store/index'
import $UserStatus from '../../store/UserStatus';
import { RingLoader } from "react-spinners";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const [authRecoil , setauthRecoil] = useRecoilState($AuthData)
  const [userStatus, setUserStatus] = useRecoilState($UserStatus); 
  console.log(authRecoil)
  console.log(userStatus)
  function handleLogin (values){
  setLoading(true);
    const newData ={...values}
    delete newData.confirm_password;
     axios.post("https://boody-magdy.vercel.app/api/users/login" , newData)
     .then(userData =>{
      if(userData.data){
        toast.success(`مرحباً بك ${userData.data.fullName}`);
        const localData = {
          isAuth : true,
          user : userData.data.fullName,
          role : userData.data.role
        }
        setauthRecoil(localData)
       localStorage.setItem('loginUser' , JSON.stringify(localData))
        console.log(userData.data)

        setUserStatus(userStatus);
        localStorage.setItem('status', JSON.stringify(userStatus))
        console.log(userData.data.role)
      }else{
        toast.error("حدث خطاء")
      }
     })
      .catch(error => {
            console.error("خطأ في الاتصال بالخادم:", error);
            toast.error("حدث خطأ أثناء محاولة الاتصال بالخادم");
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
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin} 
        >
        {({ errors }) => {
          return (
            <Form>
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
              <div className="mb-3 ml-3">
                don{" ُ"}t have an acount? <Link className="moveTo" to="/Register">Register Now</Link>
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
