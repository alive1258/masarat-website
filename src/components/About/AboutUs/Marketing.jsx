import React from "react";
import maneger from "../../../assets/imgCard/manger.png";
import Team from "../../../Pages/Home/Team/Team";

const Marketing = () => {
  return (
    <div className="mx-auto max-w-[1440px] pb-6 mt-10 md:mt-36">
      <div className="md:pl-48 md:flex  px-6 ">
  
          <div className="shadow-lg group container max-w-[320px] rounded-3xl  flex justify-center items-center ">
            <div>
              <img  src={maneger} alt="" />
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
              <div className="pt-64 text-bottom">
                <button className="text-center learn rounded-lg p-2 bg-white  text-gray-700 font-bold text-lg">
                  <p>Ahmed Saif</p>
                  <p>Project Manager </p>
                </button>
              </div>
            </div>
          </div>
      
        <div className="md:pl-20 pt-16">
          <h2 className="text-[#0F172A] md:text-5xl font-bold">
            “Maximize Your Reach with <br /> Marketing - Unlock Your <br />
            Business's Growth Potential!"!
          </h2>
          <p className="pt-6 mb-8">
            At our agency, we believe that digital marketing is more than just a
            set of <br />
            tools and tactics - it's about understanding our audience and
            delivering <br />
            personalised experiences that connect with them on a deeper level.{" "}
          </p>
          <h2 className="font-semibold text-lg">Ahmed Saif</h2>
          <p className="mb-6">Project Manager </p>
        </div>
      </div>

      
      {/* Complete Projects  */}

      <div className="md:mt-36 mt-10  px-6  ">
        <div className="flex md:justify-evenly rounded-2xl py-6 px-4 gap-8 bg-[#E6FAE9] md:py-64">
          <div>
            <h1 className="text-[#0F172A] mb-4 font-bold text-xl  md:text-5xl">523+</h1>
            <p>Complete Projects</p>
          </div>
          <div>
            <h1 className="text-[#0F172A] mb-4 font-bold text-xl md:text-5xl">52+</h1>
            <p>Cooperation company</p>
          </div>
          <div>
            <h1 className="text-[#0F172A] mb-4 font-bold text-xl  md:text-5xl">243+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
      {/* vision  */}
      <div className="md:mt-36 mt-10">
        <div className="md:text-center px-6">
          <p className="font-semibold">Our Vision</p>
          <h1 className="mt-4 md:text-5xl text-2xl font-semibold text-[#0F172A]">
            Provide The Creative Solutions
          </h1>
          <p className="mt-12">
            Our vision as a digital agency is to empower businesses and
            individuals to connect and communicate effectively <br />
            in the digital landscape that inspires trust, delivers exceptional
            value, and exceeds expectations.
          </p>
        </div>
      </div>
      {/* <div className="mt-36">
            <Team></Team>
      </div> */}
      <div></div>
    </div>
  );
};

export default Marketing;
