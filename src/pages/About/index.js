import React from 'react'
import { useEffect } from 'react'
import './index.scss'
import sign from '../../assets/img/sign.png'
import features from '../../assets/img/features.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCheck, faCubesStacked, faFile, faFlask, faImage, faShield, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import { WOW } from "wowjs";
import 'animate.css'
import { faHospitalAlt } from '@fortawesome/free-regular-svg-icons'
import { useSpring , animated } from 'react-spring'
function Number ({ n }) {
  const {number} = useSpring({
    from: { number : 0},
    number: n,
    delay: 2000,
    config: {miss: 1, tension: 20, friction: 10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;   
}
export default function index() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const wow = new WOW({live: false });
    wow.init();
  },[])
 
  
  return (
    <div className='apout'>
    <div className='intro-about'>
      <h1 className='wow animate__animated animate__fadeInUpBig animate__slow	1s'>عن مستشفي الهلال</h1>
      <span className='line'></span>
      <p className='wow animate__animated animate__fadeInDownBig animate__slow	1s'> مستشفي الهلال تساعدك للوصول سريعا للعلاج الصحيح و الدكتور المناسب او اي تخصص طبي  تحتاجه بالإضافة لتخصص الحضانات
</p>
    </div>
    <div className='info-about'>
    <div className='img-bannar wow animate__animated animate__backInLeft'>
      <img src={sign} alt='alhilal sign'/>
    </div>
    <div className='text-about wow animate__animated animate__backInRight'>
    <h1>ما تقدمه مستشفي الهلال</h1>
    
    <p>مبادرات المشاركة المجتمعية والعافية: يتفاعل مستشفى الهلال بشكل فعال مع المجتمع من خلال برامج التثقيف الصحي المختلفة، وحملات التوعية، ومبادرات العافية، بهدف تعزيز ممارسات الرعاية الصحية الوقائية وتمكين الأفراد من عيش حياة أكثر صحة</p>
    <p> خدمات الرعاية الصحية الشاملة<span><FontAwesomeIcon icon={faCheck} /></span></p>
    <p> افضل طاقم طبي في الشرق الاوسط<span><FontAwesomeIcon icon={faCheck} /></span></p>
    <p> احدث الاجهزه الطبيه<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    <p>تجهيزات علي اعلي مستوي من الكفائه<span><FontAwesomeIcon icon={faCheck} /></span> </p>
    </div>
    </div>
<div className='taps'>

<div className='tap-about wow animate__animated animate__fadeInLeft'>
<div className='num'><span> <FontAwesomeIcon icon={faUserDoctor}/> </span> <Number n={8055}/></div>
<h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>

</div>

<div className='tap-about  wow animate__animated animate__fadeInDownBig'>
  
  <div className='num'><span><FontAwesomeIcon icon={faHospitalAlt} /></span> <Number  n={2600}/> </div>
  <h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>

</div>

<div className='tap-about  wow animate__animated animate__fadeInTopRight'>
<div className='num'><span> <FontAwesomeIcon icon={faFlask}/> </span> <Number  n={1504}/></div>
<h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>

</div>

<div className='tap-about  wow animate__animated animate__fadeInDown animate__delay-1s'>
<div className='num'><span> <FontAwesomeIcon icon={faAward}/> </span> <Number n={1150}/></div>
<h3><span className='dd'>Departments</span>adipisci atque cum quia aut numquam delectus</h3>
  <p className='small' >Find out more »</p>
</div>

</div>
    <div className='info-about'>
   
    <div className='text-about wow animate__animated animate__backInRight  animate__delay-1s'>
    <h1>  رؤيتنا</h1>
    <p>الحفاظ على أعلى المعايير الدولية للخدمات المعملية والتوعية الصحية لتقديم خدمة أفضل للمرض والعملاء والصناعة ككل</p>
    <p>  الرعاية الصحية الشاملة<span><FontAwesomeIcon icon={faFile} /></span></p>
    <p> افضل طاقم طبي في الشرق الاوسط<span><FontAwesomeIcon icon={faCubesStacked} /></span> </p>
    <p> احدث الاجهزه الطبيه<span><FontAwesomeIcon icon={faImage} /></span> </p>
    <p>تجهيزات علي اعلي مستوي من الكفائه<span><FontAwesomeIcon icon={faShield} /></span> </p>
    </div>
    <div className='img-about wow animate__animated animate__backInLeft  animate__delay-1s'>
      <img src={features} alt='alhilal features'/>
    </div>

    </div>
    </div>
  )
}
