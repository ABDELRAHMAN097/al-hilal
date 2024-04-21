import { atom } from "recoil";

const $authOwenr = atom({
    key: "$authOwenr",
    default: {
        isOwenr : false,
        role: "" // قيمة افتراضية لمفتاح "role"
    }
});

export default $authOwenr;
