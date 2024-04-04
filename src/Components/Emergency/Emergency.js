import React from 'react';
import './Emergency.scss'
import { Link } from 'react-router-dom';
export default function Emergency() {
  return (
    <div>
    <div className='emergency'>
        <h1>في حالة طوارئ؟ هل تحتاج إلى المساعدة الآن؟</h1>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.</p>
        <Link className='btn' to="/APPOINTMENT">تحديد موعد</Link>
    </div>
    </div>
  )
}
