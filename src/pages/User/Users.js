import React, { useState, useEffect } from 'react';
import './index.scss'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RingLoader } from "react-spinners";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [admins, setAdmins] = useState([]);
  function changeUserToAdmin(id) {
    setLoading(true);
    // عملية تعديل الحالة
    const newData = {
      role: 'admin' // تغيير قيمة الدور إلى "owner"
    };
    axios.patch(`https://boody-magdy.vercel.app/api/users/${id}`, newData)
      .then(response => {
        console.log('User status updated successfully:', response.data);
        //  تحميل البيانات بعد تعديل لحالةالمستخدم
        getAllUsers();
        toast.success("تم تغيير الادمن  الي مستخدم");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating user status:', error);
        toast.error("حدث خطأ أثناء محاولة تعيين المستخدم");
        setLoading(false);
      });
  }
  function changeOwenrToUser(id) {
    setLoading(true);
    // عملية تعديل الحالة
    const newData = {
      role: 'user' // تغيير قيمة الدور إلى "owner"
    };
    axios.patch(`https://boody-magdy.vercel.app/api/users/${id}`, newData)
      .then(response => {
        console.log('User status updated successfully:', response.data);
        //  تحميل البيانات بعد تعديل لحالةالمستخدم
        getAllUsers();
        toast.success("تم تغيير الادمن  الي مستخدم");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating user status:', error);
        toast.error("حدث خطأ أثناء محاولة تعيين المستخدم");
        setLoading(false);
      });
  }
  // تعريف دالة لتغيير حالة المستخدم من "user" إلى "owner"
  function changeUserToOwner(id) {
    setLoading(true);
    // عملية تعديل الحالة
    const newData = {
      role: 'owner' // تغيير قيمة الدور إلى "owner"
    };
    axios.patch(`https://boody-magdy.vercel.app/api/users/${id}`, newData)
      .then(response => {
        console.log('User status updated successfully:', response.data);
        //  تحميل البيانات بعد تعديل لحالةالمستخدم
        getAllUsers();
        toast.success("تم تعيين الادمن بنجاح");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error updating user status:', error);
        toast.error("حدث خطأ أثناء محاولة تعيين المستخدم");
        setLoading(false);
      });
  }

  // دالة لاسترجاع بيانات المستخدمين
  function getAllUsers() {
    axios.get("https://boody-magdy.vercel.app/api/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }

   

  //   استرجاع البيانات عند التحميل 
  useEffect(() => {
    
    getAllUsers();
    // getAdmins(); // استدعاء دالة getAdmins لطباعة المستخدمين الـ owner
  }, []);

  function deleteUser(id) {
    setLoading(true);
    axios.delete(`https://boody-magdy.vercel.app/api/users/${id}`)
      .then(response => {
        // بعد حذف المستخدم بنجاح، يجب تحديث قائمة المستخدمين
        getAllUsers();
        toast.success("تم حذف المستخدم بنجاح");
        setLoading(false);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        toast.error("حدث خطأ أثناء محاولة حذف المستخدم");
        setLoading(false);
      });
  }

  return (
    <div  className='w-70 dash-user'>
       {loading && ( // عرض شاشة الانتظار اذا كانت الحاله true
       <div className="loading-overlay">
       <RingLoader color={"#3fbbc0"} loading={loading} size={150} className="loading-spinner" />
     </div>
      )}
      <h1>Users List</h1>
      <table className='table-data-user'>
        <thead>
          <tr>
            <th>Name</th>
            <th className='email'>Email</th>
            <th>Role</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              
              <td>{user.fullName}</td>
              <td className='email'>{user.email}</td>
              <td>{user.role}</td>
              
                
              
              <td className='m-5'>
                {/* إضافة زر لتغيير حالة المستخدم */}
                <button style={{ marginRight: '4px' }} onClick={() => changeUserToOwner(user._id)}>owenr</button>
                <button style={{ marginRight: '4px' }} onClick={() => changeUserToAdmin(user._id)}>admin</button>
                <button onClick={() => changeOwenrToUser(user._id)}>user</button>
              </td>
              <td>
                {/* إضافة زر لتغيير حالة المستخدم */}
                <button onClick={() => deleteUser(user._id)}>deleteUser</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  );
}
