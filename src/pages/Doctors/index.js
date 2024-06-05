import React, { useEffect, useState } from "react";
import "./Doctors.scss";
import photo from "../../assets/img/avatar1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faLinkedin,faTwitter,} from "@fortawesome/free-brands-svg-icons";
import { RingLoader } from "react-spinners";
import axios from "axios";
import ViewDoctor from "../../Components/ViewDoctor/ViewDoctor";
import { WOW } from "wowjs";

export default function index() {  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [users, setUsers] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
		const wow = new WOW({live: false });
		wow.init();
	  },[])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getAllAdmins();
  }, []);

  function getAllAdmins() {
    setLoading(true);
    axios
      .get("https://boody-magdy.vercel.app/api/users")
      .then((response) => {
        const adminUsers = response.data.filter(
          (user) => user.role === "admin"
        );
        setUsers(adminUsers);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching admin users:", error);
        setLoading(false);
      });
  }

  return (
    <>
      <div className="Services">
        {loading && (
          <div className="loading-overlay">
            <RingLoader
              color={"#3fbbc0"}
              loading={loading}
              size={150}
              className="loading-spinner"
            />
          </div>
        )}
        <div className="intro-services">
          <h1 className="wow animate__animated animate__fadeInUpBig animate__slow	1s">DOCTORS</h1>
          <span className="line"></span>
          <p className='wow animate__animated animate__fadeInDownBig animate__slow 1s'>
            Magnam dolores commodi suscipit.
            Necessitatibus eius consequatur ex aliquid fuga eum quidem .
            Sit sint consectetur velit.
           Quisquam quos quisquam cupiditate.
           Et nemo qui impedit suscipit alias ea.
           Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="doctors className='wow animate__animated animate__fadeInDownBig animate__slow 1s'">
          {users.map((user) => (
            <div key={user._id} className="doctor">
              <img src={photo} alt="doc-1" />
              <div className="social-doc p-2">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="text-doc">
                <h2>{user.fullName}</h2>
                <ViewDoctor user={user} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
