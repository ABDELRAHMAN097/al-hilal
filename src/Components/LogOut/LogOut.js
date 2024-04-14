import React from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from "recoil";
import $AuthData from '../../store/index';


export default function LogOut() {
    const [authRecoil , setauthRecoil] = useRecoilState($AuthData)
    function handelLogOut(){
        setauthRecoil({
            isAuth : false,
            user : null
        })
        toast.success('loged out successfully', {autoClose:2000})
        localStorage.removeItem('loginUser')
    }
  return (
    <div>
        <button onClick={handelLogOut} className='btn btn-danger'>Log Out</button>
    </div>
  )
}
