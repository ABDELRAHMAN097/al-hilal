import React from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna, faHeartbeat, faHospitalUser, faKitMedical, faPills, faUserDoctor, faWheelchair } from '@fortawesome/free-solid-svg-icons'
export default function index() {
  return (
    <div className='Services'>

    <div className='intro-services'>
      <h1>خدماتنا</h1>
      <span className='line'></span>
      <p> مستشفي الهلال تساعدك للوصول سريعا للعلاج الصحيح و الدكتور المناسب او اي تخصص طبي  تحتاجه بالإضافة لتخصص الحضانات</p>
    </div>
        
        <div className='taps'>

        <div className='tap'>
          <div className='icon'>
          <FontAwesomeIcon icon={faHeartbeat}/>
          </div>
          
            <h3>cum quia delectus</h3>
            <span className='line-tap'></span>

            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          
        </div>

        <div className='tap'>
          <div className='icon'>
          <FontAwesomeIcon icon={faPills}/>
          </div>
          
            <h3>cum quia delectus</h3>
            <span className='line-tap'></span>

            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          
        </div>

        <div className='tap'>
          <div className='icon'>
          <FontAwesomeIcon icon={faHospitalUser}/>
          </div>
          
            <h3>cum quia delectus</h3>
            <span className='line-tap'></span>

            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          
        </div>

        <div className='tap'>
          <div className='icon'>
          <FontAwesomeIcon icon={faDna}/>
          </div>
          
            <h3>cum quia delectus</h3>
            <span className='line-tap'></span>

            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          
        </div>

        <div className='tap'>
          <div className='icon'>
          <FontAwesomeIcon icon={faWheelchair}/>
          </div>
          
            <h3>cum quia delectus</h3>
            <span className='line-tap'></span>

            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          
        </div>

        <div className='tap'>
          <div className='icon'>
          <FontAwesomeIcon icon={faKitMedical}/>
          </div>
          
            <h3>cum quia delectus</h3>
            <span className='line-tap'></span>

            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
          
        </div>

        </div>

    </div>
  )
}
