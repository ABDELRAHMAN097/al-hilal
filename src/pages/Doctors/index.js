import React from 'react'
import './Doctors.scss'
import docOne from '../../assets/img/doctors-1.jpg'
import docTwo from '../../assets/img/doctors-2.jpg'
import docThree from '../../assets/img/doctors-3.jpg'
import docFour from '../../assets/img/doctors-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function index() {
  return (
    <div className="Services">
         <div className="intro-services">
        <h1>DOCTORS</h1>
        <span className="line"></span>
        <p>
          {" "}
        Magnam dolores commodi suscipit.<br/> Necessitatibus eius consequatur ex aliquid fuga eum quidem
        . Sit sint consectetur velit.<br/> Quisquam quos quisquam cupiditate.<br/> Et nemo qui impedit suscipit alias ea.<br/> Quia fugiat
         sit in iste officiis commodi quidem hic quas.
      
        </p>
      </div>
      <div className='doctors'> 
      <div className='doctor'>
        <img src={docOne} alt='doc-1'/>
        <div className='social-doc p-2'>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
        <div className='text-doc'>
        <h2>Walter White</h2>
        <p>Chief Medical Officer</p>
        </div>
      </div>
      <div className='doctor'>
        <img src={docTwo} alt='doc-1'/>
        <div className='social-doc p-2'>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
        <div className='text-doc'>
        <h2>Walter White</h2>
        <p>Chief Medical Officer</p>
        </div>
      </div>
      <div className='doctor'>
        <img src={docThree} alt='doc-1'/>
        <div className='social-doc p-2'>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
        <div className='text-doc'>
        <h2>Walter White</h2>
        <p>Chief Medical Officer</p>
        </div>
      </div>
      <div className='doctor'>
        <img src={docFour} alt='doc-1'/>
        <div className='social-doc p-2'>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
        <div className='text-doc'>
        <h2>Walter White</h2>
        <p>Chief Medical Officer</p>
        </div>
      </div>
      </div>
    </div>
  )
}
