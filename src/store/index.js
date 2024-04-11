import { atom } from "recoil";

 const $AuthData = atom({
  key: "$AuthData",
  default: {
    isAuth : false,
    user : null
  },
});
export default $AuthData