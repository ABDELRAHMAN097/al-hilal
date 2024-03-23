import React from 'react'
import './index.scss'
import sign from '../../assets/img/sign.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function index() {
  return (
    <div className='apout'>
    <div className='intro-about'>
      <h1>ABOUT US</h1>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className='info-about'>
    <div className='img-about'>
      <img src={sign} alt='alhilal sign'/>
    </div>
    <div className='text-about'>
    <h1>ما تقدمه مستشفي الهلال</h1>
    <p>مبادرات المشاركة المجتمعية والعافية: يتفاعل مستشفى الهلال بشكل فعال مع المجتمع من خلال برامج التثقيف الصحي المختلفة، وحملات التوعية، ومبادرات العافية، بهدف تعزيز ممارسات الرعاية الصحية الوقائية وتمكين الأفراد من عيش حياة أكثر صحة.</p>
    <p> خدمات الرعاية الصحية الشاملة<span><FontAwesomeIcon icon={faCheck} /></span></p>
    <p> افضل طاقم طبي في الشرق الاوسط<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    <p> احدث الاجهزه الطبيه<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    <p>تجهيزات علي اعلي مستوي من الكفائه<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    </div>
    </div>
    </div>
  )
}
