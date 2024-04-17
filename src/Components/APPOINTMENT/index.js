import React, { useState , useEffect  } from "react";
import "./Appointment.scss";
import axios from "axios";
import Error from "../../Erorr/Error"
import { ErrorMessage , Formik, Form, Field } from "formik";
import AppointSchemas from "../../Schemas/AppointSchemas";
import { toast } from "react-toastify";

export default function Index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);


  function handelAppointment(values) {
    const newValues = { ...values };
    axios
      .post("https://boody-magdy.vercel.app/api/appointments/", newValues)
      .then((response) => {
        toast.success(`تم الحجز `);
        console.log(response.data);
        const updatedAppointments = [...appointments, response.data];
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      })
      .catch((error) => {
        toast.success("حدث خطاء لم يتم الحجز");
        console.log.error("خطأ اثناء الاتصال بالخادم:", error);
      });
  }
  // function handelDelete(id) {
  //   axios.delete(`https://boody-magdy.vercel.app/api/appointments/${id}`)
  //     .then((response) => {
  //       toast.success(`تم حذف الموعد بنجاح`);
  //       console.log(response.data);
  //       // بعد حذف الموعد بنجاح، يمكنك تحديث القائمة لإزالة الموعد المحذوف
  //       const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
  //       setAppointments(updatedAppointments);
  //       localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  //     })
  //     .catch((error) => {
  //       toast.error("حدث خطأ أثناء محاولة حذف الموعد");
  //       console.error("خطأ في طلب الحذف:", error);
  //     });
  // }
  return (
    <div className="Appoint">
      <div className="APPOINTMENT">
        <h1>إحجز موعد</h1>
        <span className="line"></span>
        <p>
          يرجى اختيار الطبيب المفضل لديك من القائمة المتاحة يرجى تحديد التاريخ
          والوقت المناسبين لك حسب التخصص للموعد الطبي بعد تحديد الموعد، يُطلب
          منك تأكيد الحجز لإتمام العملية شكرًا لاستخدامك نظام حجز المستشفى
          الإلكتروني. نتطلع لخدمتك وتقديم الرعاية الصحية المناسبة لك
        </p>

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
            return (
              <Form>
                <div className="inputs">
                  <div className="input-group">
                    <label htmlFor="">Name</label>
                    <Field
                      className="input-Appoint"
                      type="text"
                      name="name"
                      placeholder=":الاسم"
                    />
                    <Error>
                  <ErrorMessage name="name" />
                </Error>
                  </div>

                  <div className="input-group">
                    <label htmlFor="">Time</label>
                    <Field
                      className="input-Appoint"
                      type="time"
                      name="time"
                      placeholder=":الوقت"
                    />
                    <Error>
                  <ErrorMessage name="time" />
                </Error>
                  </div>

                  <div className="input-group">
                    <label htmlFor="">date</label>
                    <Field
                      className="input-Appoint"
                      type="date"
                      name="date"
                      placeholder=":التاريخ"
                    />
                    <Error>
                  <ErrorMessage name="date" />
                </Error>
                  </div>

                  <div className="input-group">
                    <label htmlFor="">doctor</label>
                    <Field
                      className="input-Appoint"
                      type="text"
                      name="doctor"
                      placeholder=":اسم الدكتور"
                    />
                    <Error>
                  <ErrorMessage name="doctor" />
                </Error>
                  </div>
                  <div className="input-group">
                  <label htmlFor="">التخصص</label>

                  <select
                    className="input-Appoint specialty"
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
                  </div>


                  {/* <div className="input-group"></div>
                  <select
                    className="input-Appoint"
                    id="doctor"
                    name="doctor"
                    required
                    placeholder=":الطبيب"
                  >
                    <option value="دكتور أحمد">دكتور أحمد</option>
                    <option value="دكتورة سارة">دكتورة سارة</option>
                    <option value="دكتور محمد">دكتورة سلمي</option>
                    <option value="دكتور محمد">دكتور محمد </option>
                  </select> */}
                <div  className="input-group">

                <button className="btn-ll" type="submit">
                  حجز
                </button>
                </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      {appointments.length > 0 && (
  <div className="Appoint-data">
    <table>
      <thead>
        <tr>
          <th>اسم الحالة</th>
          <th>الوقت</th>
          <th>التاريخ</th>
          <th>اسم الدكتور</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment , index) => (
          <tr key={index}>
            <td>{appointment.name}</td>
            <td>{appointment.time}</td>
            <td>{appointment.date}</td>
            <td>{appointment.doctor}</td>
            {/* <td> <button className="btn btn-dager" onClick={() => handelDelete(appointment.id)}>Delete</button> </td>
            <td> <button className="btn btn-dager" onClick={() => handelDelete(appointment.id)}>Update </button> </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

     
    </div>
  );
}
