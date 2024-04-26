import { atom } from "recoil";

const userStatus = JSON.parse(localStorage.getItem('status'));

const $authOwenr = atom({
    key: "$authOwenr",
    default: {
        isOwenr: userStatus?.role === "owenr" ? true : false,
        role: userStatus?.role || "", // قيمة افتراضية لمفتاح "role"
    }
});

export default $authOwenr;
