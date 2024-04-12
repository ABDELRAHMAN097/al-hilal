import React, { Fragment } from 'react';
import './Emergency.scss'
import { Link } from 'react-router-dom';
import $AuthData from '../../store/index'
import { useRecoilState } from "recoil";
export default function Emergency() {
  const [authRecoil] = useRecoilState($AuthData)

  return (
    <div>
    <div className='emergency'>
        <h1>في حالة طوارئ؟ هل تحتاج إلى المساعدة الآن؟</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
            {authRecoil.isAuth ? 
        <Link className='btn' to="/APPOINTMENT">تحديد موعد</Link>
            
            :(<Fragment>
                <Link className='btn' to="/Register">go to register</Link>
            </Fragment>)}
    </div>
    </div>
  )
}
