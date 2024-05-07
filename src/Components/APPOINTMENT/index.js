import React, { useEffect, useState } from "react";
import "./Appointment.scss";
import appointPhoto from '../../assets/img/appointment.jpg'
import axios from "axios";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";

export default function Index() {
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [nameError, setNameError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [doctorError, setDoctorError] = useState("");

  function validateForm() {
    let isValid = true;

    if (!name) {
      setNameError("الرجاء إدخال الاسم");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!time) {
      setTimeError("الرجاء إدخال الوقت");
      isValid = false;
    } else {
      setTimeError("");
    }

    if (!date) {
      setDateError("الرجاء إدخال التاريخ");
      isValid = false;
    } else {
      setDateError("");
    }

    if (!doctor) {
      setDoctorError("الرجاء اختيار الطبيب");
      isValid = false;
    } else {
      setDoctorError("");
    }

    return isValid;
  }

  function handelAppointment(event) {
    event.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    const newValues = { name, time, date, doctor };
    setLoading(true);
    axios
      .post("https://boody-magdy.vercel.app/api/appointments/", newValues)
      .then((response) => {
        setLoading(false);
        toast.success(`تم الحجز`);
        const updatedAppointments = [...appointments, response.data];
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      })
      .catch((error) => {
        toast.error("حدث خطاء لم يتم الحجز");
        console.error("خطأ اثناء الاتصال بالخادم:", error);
        setLoading(false);
      });
  }
  

  useEffect(() => {
    getAllAdmins();
  }, []);

  function getAllAdmins() {
    setLoading(true);

    axios
      .get("https://boody-magdy.vercel.app/api/users")
      .then((response) => {
      setLoading(false);

        const adminUsers = response.data.filter(
          (user) => user.role === "admin"
        );
        setUsers(adminUsers);
      })
      .catch((error) => {
        console.error("Error fetching admin users:", error);
        setLoading(true);

      });
  }

  function handelDelete(id) {
    setLoading(true);
    axios
      .delete(`https://boody-magdy.vercel.app/api/appointments/${id}`)
      .then((response) => {
        console.log('deleted appointment', response.data);
        toast.success('تم حذف الحجز');
        setLoading(false);
        const updatedAppointments = appointments.filter(appointment => appointment._id !== id);
        setAppointments(updatedAppointments);
        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
      })
      .catch((error) => {
        toast.error('حدث خطاء أثناء حذف الحجز');
        console.error('Error deleting appointment:', error);
        setLoading(false);
      });
  }

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  return (
    <div className="Appoint">
      {loading && ( // عرض شاشة الانتظار اذا كانت الحاله true
              <div className="loading-overlay">
              <RingLoader color={"#3fbbc0"} loading={loading} size={150} className="loading-spinner" />
              </div>
             )}
      <div className="APPOINTMENT">
        <h1>إحجز موعد</h1>
        <span className="line"></span>
        <p>
          يرجى اختيار الطبيب المفضل لديك من القائمة المتاحة يرجى تحديد التاريخ
          والوقت المناسبين لك حسب التخصص للموعد الطبي بعد تحديد الموعد، يُطلب
          منك تأكيد الحجز لإتمام العملية شكرًا لاستخدامك نظام حجز المستشفى
          الإلكتروني. نتطلع لخدمتك وتقديم الرعاية الصحية المناسبة لك
        </p>

        <form onSubmit={handelAppointment}>
        <div className="appoint-photo">
                <img src={appointPhoto} alt="appointPhoto"/>
              </div>
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="">Name</label>
              <input
                className="input-Appoint"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=":الاسم"
              />
              {nameError && <span className="error-message">{nameError}</span>}
            </div>

            <div className="input-group">
              <label htmlFor="">Time</label>
              <input
                className="input-Appoint"
                type="time"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder=":الوقت"
              />
              {timeError && <span className="error-message">{timeError}</span>}
            </div>

            <div className="input-group">
              <label htmlFor="">date</label>
              <input
                className="input-Appoint"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder=":التاريخ"
              />
              {dateError && <span className="error-message">{dateError}</span>}
            </div>

            <div className="input-group">
              <label htmlFor="">الاطباء</label>
              <select
                className="input-Appoint specialty form-control w-100"
                name="doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
              >
                <option value="">اختر طبيبك</option>
                {users.map((user) => (
                  <option key={user._id} value={user.fullName}>{user.fullName}</option>
                ))}
              </select>
              {doctorError && <span className="error-message">{doctorError}</span>}
            </div>

            <div className="input-group">
              <button className="btn-ll" type="submit">
                حجز
              </button>
            </div>
          </div>
        </form>
      </div>

      {appointments.length > 0 && (
        <div className="Appoint-data">
          <table className="table-data-user">
            <thead>
              <tr>
                <th>اسم الحالة</th>
                <th>الوقت</th>
                <th>التاريخ</th>
                <th>اسم الدكتور</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.name}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.doctor}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handelDelete(appointment._id)}>حذف</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
