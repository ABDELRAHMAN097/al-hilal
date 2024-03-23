import React from 'react'
import { useEffect } from 'react'
import './index.scss'
import sign from '../../assets/img/sign.png'
import features from '../../assets/img/features.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCubesStacked, faFile, faICursor, faImage, faShield } from '@fortawesome/free-solid-svg-icons'
import { WOW } from "wowjs";
import 'animate.css'
export default function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const wow = new WOW({live: false });
    wow.init();
  },[])
  // useEffect(() => {
  //   const wow = new WOW({ live: false });
  //   wow.init();
  //   });
  
  return (
    <div className='apout'>
    <div className='intro-about'>
      <h1>ABOUT US</h1>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className='info-about'>
    <div className='img-bannar wow animate__animated animate__backInLeft'>
      <img src={sign} alt='alhilal sign'/>
    </div>
    <div className='text-about wow animate__animated animate__backInRight'>
    <h1>ما تقدمه مستشفي الهلال</h1>
    <p>مبادرات المشاركة المجتمعية والعافية: يتفاعل مستشفى الهلال بشكل فعال مع المجتمع من خلال برامج التثقيف الصحي المختلفة، وحملات التوعية، ومبادرات العافية، بهدف تعزيز ممارسات الرعاية الصحية الوقائية وتمكين الأفراد من عيش حياة أكثر صحة</p>
    <p> خدمات الرعاية الصحية الشاملة<span><FontAwesomeIcon icon={faCheck} /></span></p>
    <p> افضل طاقم طبي في الشرق الاوسط<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    <p> احدث الاجهزه الطبيه<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    <p>تجهيزات علي اعلي مستوي من الكفائه<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    </div>
    </div>


    <div className='info-about'>
   
    <div className='text-about wow animate__animated animate__backInRight'>
    <h1>  رؤيتنا</h1>
    <p>الحفاظ على أعلى المعايير الدولية للخدمات المعملية والتوعية الصحية لتقديم خدمة أفضل للمرض والعملاء والصناعة ككل</p>
    <p>  الرعاية الصحية الشاملة<span><FontAwesomeIcon icon={faFile} /></span></p>
    <p> افضل طاقم طبي في الشرق الاوسط<span><FontAwesomeIcon icon={faCubesStacked} /></span> </p>
    <p> احدث الاجهزه الطبيه<span><FontAwesomeIcon icon={faImage} /></span> </p>
    <p>تجهيزات علي اعلي مستوي من الكفائه<span><FontAwesomeIcon icon={faShield} /></span> </p>
    </div>
    <div className='img-about wow animate__animated animate__backInLeft'>
      <img src={features} alt='alhilal features'/>
    </div>

    </div>
    </div>
  )
}
