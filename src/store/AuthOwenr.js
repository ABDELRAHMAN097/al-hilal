import { atom } from "recoil";

const $AuthOwenr = atom({

    key : "$AuthOwenr",
    default: {
        admin: false,
        role: 'owner',
    }


})
export default $AuthOwenr