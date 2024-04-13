import { atom } from "recoil";

const localData = JSON.parse(localStorage.getItem('loginUser'))

 const $AuthData = atom({
  key: "$AuthData",
  default: localData || {
    isAuth : false,
    user : null
  },
});
export default $AuthData