import React, { useEffect, useState } from 'react'
import './Doctors.scss'
import docOne from '../../assets/img/doctors-1.jpg'
// import docTwo from '../../assets/img/doctors-2.jpg'
// import docThree from '../../assets/img/doctors-3.jpg'
// import docFour from '../../assets/img/doctors-4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { RingLoader } from "react-spinners";
import axios from 'axios'
export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [users, setUsers] = useState([]);
  console.log(users)
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAllAdmins();
  }, []);

  function getAllAdmins() {
    setLoading(true);
    axios.get("https://boody-magdy.vercel.app/api/users")
      .then(response => {
        const adminUsers = response.data.filter(user => user.role === "admin")
        setUsers(adminUsers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching admin users:', error);
        setLoading(false);
      });
  }

  return (
    <>
    <div className="Services">
      {loading && ( // عرض شاشة الانتظار اذا كانت الحاله true
       <div className="loading-overlay">
       <RingLoader color={"#3fbbc0"} loading={loading} size={150} className="loading-spinner" />
     </div>
      )}
         <div className="intro-services">
        <h1>DOCTORS</h1>
        <span className="line"></span>
        <p>
          
        Magnam dolores commodi suscipit.<br/> Necessitatibus eius consequatur ex aliquid fuga eum quidem
        . Sit sint consectetur velit.<br/> Quisquam quos quisquam cupiditate.<br/> Et nemo qui impedit suscipit alias ea.<br/> Quia fugiat
         sit in iste officiis commodi quidem hic quas.
      
        </p>
      </div>
      <div className='doctors'> 

      {users.map(user => (
      <div key={user._id} className='doctor'>
        <img src={docOne} alt='doc-1'/>
        <div className='social-doc p-2'>
          <FontAwesomeIcon icon={faTwitter}/>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
        <div className='text-doc'>
        <h2>{user.fullName}</h2>
        <p>{user.phone}</p>
        </div>
      </div>

))}
      </div>
    </div>
    </>
  )
}
