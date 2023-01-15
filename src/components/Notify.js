import { useDispatch, useSelector } from "react-redux";
import { resendEmail } from "../redux/slices/emailResendSlice";

const Notify = () => {
    const dispatch = useDispatch()
    const resend = useSelector((state) => state?.emailResend?.res);
    
    console.log(resend?.message);

    return (
        <div className="h-10 w-full bg-warning flex justify-center items-center p-[4%] lg:p-2 text-xs md:text-[14px]">
        <p className="text-center">
          You have not verified your email address. Click{" "}
          <span className="text-link cursor-pointer" onClick={()=> dispatch(resendEmail())}>here</span> to
          resend verification link.{" "}

          {resend?.message && <span className={resend?.status ? 'text-success font-bold' : 'text-danger font-bold'}>{resend?.message}</span>}

          
        </p>
      </div>
    );
};

export default Notify;