/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
export default function index() {
   
      const [isopen , setisopen] = useState(false)
      return (
        <div className='shadow-md w-full' id='nav'>
          <div className='md:flex justify-between items-center  py-4 px-7 bg-transparent'>
          
              {/* logo */}
           <div className='logo flex text-2xl cursor-pointer  items-center gap-2'>
             <img src={logo} alt=''/>
            </div>
            {/* menue bar icon */}
    
            <div onClick={()=> setisopen(!isopen)} className='w-10 h-10 absolute right-8 top-12 md:hidden'>    
            {
                isopen ? <FontAwesomeIcon className='w-7 h-7 z-ind' icon={faXmark}/> : <FontAwesomeIcon className='w-7 h-7' icon={faBars}/>
            }    
            </div>
    
            {/* {links} */}
            <ul className= {`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[2]
             left-0 w-full md:w-auto md:pl-0 pl-9 bg-white transition-all duration-500 ease-in ${isopen ? 'top-12' : 'top-[-490px]'}`}>
            
             <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <Link to="">Home</Link>
             </li>
             <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <Link to="/about">About</Link>
             </li>
             <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <Link to="/services">Services</Link>
             </li>
             <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <Link to="/contact">Contact</Link>
             </li>
             <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <Link to="/pages">Pages</Link>
             </li>
             <li className='font-semibold my-7 md:my-0 md:ml-8'>
                <Link to="/blog">Blog</Link>
             </li>
            <button className='btn bg-blue-300  py-1 px-3 md:ml-3 rounded md:static text-black'>Appointment</button>
            </ul>
          </div>
        </div>
      )
}
