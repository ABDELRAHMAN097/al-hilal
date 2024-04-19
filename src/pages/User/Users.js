/* eslint-disable no-undef */
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Users() {
  const [users, setUsers] = useState([]);

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
  }, []);

  function deleteUser(id) {
    axios.delete(`https://boody-magdy.vercel.app/api/users/${id}`)
      .then(response => {
        console.log('User deleted successfully:', response.data);
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
    <div>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* إضافة زر لتغيير حالة المستخدم */}
                <button onClick={() => changeUserToOwner(user._id)}>Change to Owner</button>
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
