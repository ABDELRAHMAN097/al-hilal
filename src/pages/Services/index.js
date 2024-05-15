import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBone,
  faBrain,
  faHeartbeat,
  faHospitalUser,
  faPersonBreastfeeding,
} from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
export default function index() {
  return (
    <div className="Services">
      <div className="intro-services">
        <h1>خدماتنا</h1>
        <span className="line"></span>
        <p>
          {" "}
          مستشفي الهلال تساعدك للوصول سريعا للعلاج الصحيح و الدكتور المناسب او
          اي تخصص طبي تحتاجه بالإضافة لتخصص الحضانات
        </p>
      </div>

      <div className="taps">
        <div className="tap">
          <div className="icon">
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>

          <h3>Cardiology</h3>
          <span className="line-tap"></span>

          <p>
          Our board-certified cardiologists treat and prevent cardiovascular problems with a focus on heart health.
          </p>
          <Link className='appint more' to= "/Heart">Learn More ...</Link>
        </div>
        <div className="tap">
          <div className="icon">
          <FontAwesomeIcon icon={faEye} />
          </div>

          <h3>Ophthalmology</h3>
          <span className="line-tap"></span>

          <p>
          In order to keep your vision healthy, our ophthalmologists provide eye exams and surgeries.
          </p>
          <Link className='appint more' to= "/Orthopedic">Learn More ...</Link>
        </div>
        <div className="tap">
          <div className="icon">
            <FontAwesomeIcon icon={faHospitalUser} />
          </div>

          <h3>Health Care</h3>
          <span className="line-tap"></span>

          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident
          </p>
          <Link className='appint more' to= "/Orthopedic">Learn More ...</Link>
        </div>
        <div className="tap">
          <div className="icon">
            <FontAwesomeIcon icon={faBone} />
          </div>

          <h3>Orthopedic Surgery</h3>
          <span className="line-tap"></span>

          <p>
          Discover renewed hope through our advanced bone marrow transplant procedures.
          </p>
          <Link className='appint more' to= "/Orthopedic">Learn More ...</Link>
        </div>
        <div className="tap">
          <div className="icon">
            <FontAwesomeIcon icon={faBrain} />
          </div>

          <h3>Neurology</h3>
          <span className="line-tap"></span>

          <p>
          Specialized care for brain and nerve disorders, ensuring expert diagnosis and compassionate treatment.
          </p>
          <Link className='appint more' to= "/neurology">Learn More ...</Link>
        </div>
        <div className="tap">
          <div className="icon">
            <FontAwesomeIcon icon={faPersonBreastfeeding} />
          </div>

          <h3>Maternity Care</h3>
          <span className="line-tap"></span>

          <p>
          Experience comprehensive maternity care that prioritizes the health and well-being of expectant mothers and their newborns.
          </p>
          <Link className='appint more' to= "/Mother">Learn More ...</Link>
        </div>
      </div>
    </div>
  );
}
