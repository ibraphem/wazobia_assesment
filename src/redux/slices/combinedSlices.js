import { combineReducers } from "redux";
import userSlice from "./userSlice";
import itemSlice from "./itemSlice";
import modalSlice from "./modalSlice";
import emailResendSlice from "./emailResendSlice";

const combinedSlices = combineReducers({
  user: userSlice,
  items: itemSlice,
  modal: modalSlice,
  emailResend: emailResendSlice,
});

export default combinedSlices;
