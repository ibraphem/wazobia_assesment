
const Notify = () => {
    const verificationMail = async() => {
    //
    }
    return (
        <div className="h-10 w-full bg-warning flex justify-center items-center p-[4%] lg:p-2 text-xs md:text-[14px]">
        <p className="text-center">
          You have not verified your email address. Click{" "}
          <span className="text-link cursor-pointer" onClick={verificationMail}>here</span> to
          resend verification link.{" "}

          {/* {msg && <span className='text-success font-bold'>Verification email has been resent</span>} */}

          
        </p>
      </div>
    );
};

export default Notify;