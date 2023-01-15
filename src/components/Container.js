import React from "react";

const Container = (props) => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-[85%] md:[60%] lg:w-[45%] bg-white border-[1px] border-[#f0f0f0] rounded-lg p-6">
        {props.children}
      </div>
    </div>
  );
};

export default Container;
