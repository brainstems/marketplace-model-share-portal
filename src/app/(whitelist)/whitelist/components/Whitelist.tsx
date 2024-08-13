import React from "react";
import Form from "./Form/Form";
import "./_whitelist.css";

const Whitelist = () => {
  return (
    <div className="white flex flex-col gap-4 w-full min-h-[100vh]   relative  ">
      <div className="relative  w-full h-full flex justify-center items-center mt-[9rem] px-4 ">
        <Form />
      </div>
    </div>
  );
};

export default Whitelist;
