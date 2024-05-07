import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import $AuthData from '../../store/index';


export default function LogOut() {
  const [appointments, setAppointments] = useState([]);

    const [authRecoil , setauthRecoil] = useRecoilState($AuthData)
    function handelLogOut(){
      localStorage.removeItem("appointments");
      setAppointments([]);
        setauthRecoil({
            isAuth : false,
            user : null
        })
        toast.success('تم تسجيل خروج', {autoClose:2000})
        localStorage.removeItem('loginUser')
    }
  return (
    <div>
        <button onClick={handelLogOut} className='danger'>Log Out</button>
    </div>
  )
}
