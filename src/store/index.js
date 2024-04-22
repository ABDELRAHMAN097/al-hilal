import { atom } from "recoil";

const localData = JSON.parse(localStorage.getItem('loginUser')) || [];
console.log(localData.data)
 const $AuthData = atom({
  key: "$AuthData",
  default: localData || {
    isAuth : localData?.data ? true : false,
    user :  localData?.data?.fullName || null
  },
});
export default $AuthData