import React from "react";
import "./Appointment.scss";
import axios from "axios";
import { Formik , Form, Field } from "formik";
import AppointSchemas from '../../Schemas/AppointSchemas';
import { toast } from 'react-toastify';
export default function index() {



  function handelAppointment(values){
    const newValues = {...values}
    axios.post("https://boody-magdy.vercel.app/api/appointments/" , newValues)
    .then(response => {
      toast.success(`تم الحجز يرايق`);
      console.log(response.data)})
    .catch(error => {
      toast.success('حدث خطاء لم يتم الحجز');
      console.log.error("خطأ اثناء الاتصال بالخادم:" , error)
    })
  }
  return (
    <div className="Appoint">
      <div className="APPOINTMENT">
        <h1>إحجز موعد</h1>
        <span className="line"></span>
        <p>
          {" "}
          يرجى اختيار الطبيب المفضل لديك من القائمة
          المتاحة <br />
          يرجى تحديد التاريخ والوقت المناسبين لك حسب التخصص للموعد الطبي <br />
          بعد تحديد الموعد، يُطلب منك تأكيد الحجز لإتمام العملية <br />
          شكرًا لاستخدامك نظام حجز المستشفى الإلكتروني. نتطلع لخدمتك وتقديم
          الرعاية الصحية المناسبة لك
        </p>
      </div>


      <Formik
      initialValues={{
        name: "",
        time: "",
        date: "",
        doctor: "",
      }}
      validationSchema={AppointSchemas}
      onSubmit={handelAppointment} 
      >

        {({ errors }) => {
          return(
            <Form className="d-block">
        <div className="inputs">
        <label htmlFor="">Name</label>
        <Field className="input-ll col-3" type="text" name="name" placeholder=":الاسم"/>

        <label htmlFor="">Time</label>
        <Field type="time" name="time" placeholder=":الوقت"/>

        <label htmlFor="">date</label>
        <Field type="date" name="date" placeholder=":التاريخ"/>

        <label htmlFor="">doctor</label>
        <Field type="text" name="doctor" placeholder=":اسم الدكتور"/>
        </div>

        <select
            className="input-ll col-3"
            id="department"
            name="department"
            required
            placeholder=":القسم"
          >
            <option value="">اسنان</option>
            <option value="أطفال">أطفال</option>
            <option value="نساء وتوليد">نساء وتوليد</option>
            <option value="جراحة">جراحة</option>
          </select>

        <select
            className="input-ll col-3"
            id="doctor"
            name="doctor"
            required
            placeholder=":الطبيب"
          >
            <option value="دكتور أحمد">دكتور أحمد</option>
            <option value="دكتورة سارة">دكتورة سارة</option>
            <option value="دكتور محمد">دكتورة سلمي</option>
            <option value="دكتور محمد">دكتور محمد </option>
          </select>

          <button className="btn-ll" type="submit">
            حجز
          </button>

        </Form>
          );
        }}
      </Formik>
    </div>
  );
}
