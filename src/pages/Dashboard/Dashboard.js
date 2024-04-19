import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Dashboard() {
    const [appointments, setAppointments] = useState([]);

    // استرجاع جميع المواعيد
    function getAllAppointments() {
        axios.get("https://boody-magdy.vercel.app/api/appointments/")
            .then(response => {
                setAppointments(response.data);
            })
            .catch(error => {
                toast.error('حدث خطاء اثناء تحميل المواعيد')
                console.error('Error fetching appointments:', error);
            });
    }

    useEffect(() => {
        getAllAppointments();
    }, []);

    // حذف موعد
    function deleteAppointment(id) {
        axios.delete(`https://boody-magdy.vercel.app/api/appointments/${id}`)
            .then(response => {
                console.log('Appointment deleted successfully:', response.data);
                // بعد حذف الموعد بنجاح، يتم تحديث قائمة المواعيد
                toast.success('تم حذف الحجز')
                getAllAppointments();
            })
            .catch(error => {
                toast.error('حدث خطاء اثناء حذف الحجز')
                console.error('Error deleting appointment:', error);
            });
    }

    return (
        <div>
            <Link className='btn btn-success' to={"/users"}> Users </Link>
            <div className='users-data'>
                {appointments.length > 0 && (
                    <div className="Appoint-data">
                        <table>
                            <thead>
                                <tr>
                                    <th>اسم الحالة</th>
                                    <th>الوقت</th>
                                    <th>التاريخ</th>
                                    <th>اسم الدكتور</th>
                                    <th>العمليات</th>
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
                                            {/* زر لحذف الموعد عند النقر عليه */}
                                            <button onClick={() => deleteAppointment(appointment._id)}>حذف</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
