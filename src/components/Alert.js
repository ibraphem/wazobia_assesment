import React from "react";

const Alert = ({type, msg}) => {
  return (
    <div className={`h-10  w-full bg-danger flex justify-center items-center mt-5 mb-3 p-[4%] lg:p-2 text-xs md:text-[14px]`}>
    <p className="text-center text-white font-bold p-[4%]">
      {msg}
    </p>
  </div>
  );
};

export default Alert;
