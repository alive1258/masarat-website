import React from "react";
import man2 from "../../../assets/imgCard/man2.png";

const ContactHome = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-28 mb-28 mt-10  md:mt-48">
      <div className="md:relative">
        <div className="bg-[#9BEBA8] rounded-lg md:h-[456px]">
          <div className="flex justify-end md:pt-28 py-10 md:pr-36">
         <div className="text-center">
         <p>Contact us</p>
            <h1 className="md:text-4xl font-bold">
              We help you to grow your <br />
              business faster & easier.
            </h1>
            <p className="pt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididun.
            </p>
            <button className="text-white px-4 py-2 bg-[#0F241F] rounded-lg mt-6">Contact Us</button>
         </div>
          </div>
        </div>
        <div className="md:absolute -top-28 ">
            <img src={man2} alt="" className="md:block hidden"/>
        </div>
      
      </div>
    </div>
  );
};

export default ContactHome;
