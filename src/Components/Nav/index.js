/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStethoscope, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function index() {
    // let links =[
    //     {name: 'Home' ,  link: '/HomePage'},
    //     {name: 'About' , link: '/About'},
    //     {name: 'Services' , link: '/'},
    //     {name: 'Pages' , link: '/'},
    //     {name: 'Blog' , link: '/'}
    //   ];
      const [isopen , setisopen] = useState(false)
      return (
        <div className='shadow-md w-full' id='nav'>
          <div className='md:flex justify-between items-center  py-4 px-7 bg-transparent'>
          
              {/* logo */}
           <div className='flex text-2xl cursor-pointer items-center gap-2'>
              <FontAwesomeIcon icon={faStethoscope} style={{color: "#74C0FC"}}/>
              
              <div>Medizai</div>
            </div>
            {/* menue bar icon */}
    
            <div onClick={()=> setisopen(!isopen)} className='w-10 h-10 absolute right-8 top-6 md:hidden'>    
            {
                isopen ? <FontAwesomeIcon className='w-7 h-7' icon={faXmark}/> : <FontAwesomeIcon className='w-7 h-7' icon={faBars}/>
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

              {/* {
                links.map( link => 
                <li className='font-semibold my-7 md:my-0 md:ml-8'>
                  <a href='/'>{link.name}</a>
                </li>)
              } */}
            <button className='btn bg-blue-300 text-white py-1 px-3 md:ml-3 rounded md:static'>Appointment</button>
            </ul>
          </div>
        </div>
      )
}
