import { atom } from "recoil";

const localData = JSON.parse(localStorage.getItem('loginUser'));

const $AuthData = atom({
  key: "$AuthData",
  default: localData || {
    isAuth: false,
    user: null,
    role: null || localData.role
  },
});

export default $AuthData;
