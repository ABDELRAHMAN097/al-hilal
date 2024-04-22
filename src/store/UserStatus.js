import { atom } from "recoil";


const data = JSON.parse(localStorage.getItem('loginUser')) || [];
console.log(data)

const $authOwenr = atom({
    key: "$authOwenr",
    default: {
        isOwenr : data?.data?.role === "owenr" ? true : false,
        role:  data?.data?.role || "", // قيمة افتراضية لمفتاح "role"
    }
});

export default $authOwenr;
