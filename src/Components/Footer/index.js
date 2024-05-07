import React, { Fragment } from "react";
import "./index.scss";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF , faLinkedinIn , faTwitter } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import $AuthData from '../../store/index'
import { useRecoilState } from "recoil";
import LogOut from "../LogOut/LogOut";
export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [authRecoil] = useRecoilState($AuthData)
  const showToast = () => {
    toast.success("Your form has been submitted successfully!");
  };
  return (
    <div id="footer">
      <div className="footer-top flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="footer logo" />
        </div>
        <div className="details">
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit. Sit urna, tortor
            pulvinar dolor rhoncus Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
      <div className="middle">
        <div className="middleTab">
          <div className="evelopeIcon">
            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          </div>
          <div className="textFooter">
            <h2>Subscribe Newsletter</h2>
            <p>
              principe kun je jouw contracten lorem opzeggen wanneer je wilt.
              Het kan echter zijn dat je een abonnement hebt afgesloten voor een
            </p>
          </div>
          <div className="input-supmit">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <button type="submit" onClick={showToast}>Submit</button>
          </div>
        </div>
        <div className="middleTab">
          <div className="tab">
          <h2>Quick Links</h2>
          <ul>
         
          {authRecoil.isAuth ?
        
            <ul>
              <li className='font-semibold md:my-0 toRight'>
             <Link to="/">Home</Link>

            </li>
             <li className='font-semibold md:my-0  toRight'>
                 <Link to="/about">About</Link>
               </li>
               <li className='font-semibold md:my-0  toRight'>
                <Link to="/services">Services</Link>
             </li>
             <li className='font-semibold md:my-0  toRight'>
                <Link to="/contact">Contact</Link>
             </li>
                
             <li className='font-semibold md:my-0  toRight'>
                <Link to="/doctors">Doctors</Link>
             </li>
             <li>
             <Link className='appint' to= "/APPOINTMENT"> إحجز موعد</Link>
             </li>
             <li className='font-semibold  md:my-0  toRight'>
                <LogOut/>
             </li>
             </ul>
         
            : (<Fragment> 
             
             
            <li className='font-semibold md:my-0 toRight'>
             <Link to="/">Home</Link>

            </li>
             <li className='font-semibold md:my-0  toRight'>
                 <Link to="/about">About</Link>
               </li>
               <li className='font-semibold md:my-0  toRight'>
                <Link to="/services">Services</Link>
             </li>
             <li className='font-semibold md:my-0  toRight'>
                <Link to="/contact">Contact</Link>
             </li>
             <li className='font-semibold md:my-0  toRight'>
                <Link to="/doctors">Doctors</Link>
             </li>
             <li className='font-semibold md:my-0  toRight'>
                <Link to="/register">Register</Link>
             </li>
             <li className='font-semibold md:my-0  toRight'>
                <Link to="/login">login</Link>
             </li>
            
            
               </Fragment>)}  
          </ul>
          </div>
        </div>
        <div className="middleTab">
        <div className="tab">
          <h2>Utility Page</h2>
          <ul>
                <Link className="toRight" to="/">Style Guide</Link>          
                <Link className="toRight" to="/">LicenseLicense</Link>
                <Link className="toRight" to="/">Changelog</Link>
          </ul>
          </div>
        </div>
        <div className="middleTab">
        <div className="tab">
          <h2>Contact</h2>
          <p className="toRight"><span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></span> (603) 555-0123</p>
          <p className="toRight"><span><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span> (603) 555-0123</p>
          <p className="time toRight">Open 24/7 Hours</p>   
        </div>
        </div>
      </div>
      <div className="Copyright">
        <p>Copyright © Al-Hilal | Designed by Abdelrahman - Powered by Abdelrahman</p>
        <div className="social"> 
          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}
