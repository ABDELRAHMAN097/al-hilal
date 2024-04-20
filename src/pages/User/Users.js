import React, { useState, useEffect } from 'react';
import './index.scss'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Users() {
  const [users, setUsers] = useState([]);
  // const [admins, setAdmins] = useState([]);

  // تعريف دالة لتغيير حالة المستخدم من "user" إلى "owner"
  function changeUserToOwner(id) {
    // عملية تعديل الحالة
    const newData = {
      role: 'owner' // تغيير قيمة الدور إلى "owner"
    };

    axios.patch(`https://boody-magdy.vercel.app/api/users/${id}`, newData)
      .then(response => {
        console.log('User status updated successfully:', response.data);
        // إعادة تحميل البيانات بعد تعديل الحالة
        getAllUsers();
        toast.success("تم تعيين الادمن بنجاح");

      })
      .catch(error => {
        console.error('Error updating user status:', error);
        toast.error("حدث خطأ أثناء محاولة تعيين المستخدم");
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

   

  // تنفيذ دالة استرجاع البيانات عند تحميل المكون
  useEffect(() => {
    
    getAllUsers();
    // getAdmins(); // استدعاء دالة getAdmins لطباعة المستخدمين الـ owner
  }, []);

  function deleteUser(id) {
    axios.delete(`https://boody-magdy.vercel.app/api/users/${id}`)
      .then(response => {
        // بعد حذف المستخدم بنجاح، يجب تحديث قائمة المستخدمين
        getAllUsers();
        toast.success("تم حذف المستخدم بنجاح");

      })
      .catch(error => {
        console.error('Error deleting user:', error);
        toast.error("حدث خطأ أثناء محاولة حذف المستخدم");

      });
  }

  return (
    <div  className='w-70 dash-user'>
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
              
                
              
              <td>
                {/* إضافة زر لتغيير حالة المستخدم */}
                <button onClick={() => changeUserToOwner(user._id)}>promotion</button>
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
