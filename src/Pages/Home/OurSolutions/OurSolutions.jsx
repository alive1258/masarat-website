import React from "react";
import call from "../../../assets/imgCard/call.png";
import sms from "../../../assets/imgCard/sms.png";
import ant from "../../../assets/imgCard/ant.png";
import plen from "../../../assets/imgCard/plen.png";
import man from "../../../assets/imgCard/man.png";
import './Solutations.css'

const OurSolutions = () => {
  return (
    
      <div className="max-w-[1440px] px-6 md:px-28 mx-auto mt-10 md:mt-44">
        <h6>Our Solutions</h6>

        <div className="md:flex justify-between items-center">
          <div className="pt-4">
            <h1 className="text-[#0F172A] font-bold text-2xl md:text-5xl">
              What Makes <span className="text-[#1A3D37]">Musarat</span> <br />{" "}
              Different{" "}
            </h1>
            <p className="pt-16 ">
              Reach the right decisions by accessing your stats at a glance{" "}
              <br />
              Analyze your performance and gain flexibility with our <br />
              intuitive dashboard to achieve
            </p>
            <div className="flex items-center pt-16 gap-4">
              <div>
                <img src={plen} alt="" />
              </div>
              <div>
                <h3 className="text-[#1A3D37] text-xl font-semibold">
                  Fast Working Process
                </h3>
              </div>
            </div>
            <div className="flex items-center pt-3 gap-4">
              <div>
                <img src={ant} alt="" />
              </div>
              <div>
                <h3 className="text-[#1A3D37] text-xl font-semibold">
                Excellent Protections
                </h3>
              </div>
            </div>
            <div className="flex items-center pt-3 gap-4">
              <div>
                <img src={sms} alt="" />
              </div>
              <div>
                <h3 className="text-[#1A3D37] text-xl font-semibold">
                Dedicated Team
                </h3>
              </div>
            </div>
            <div className="flex items-center pt-3 gap-4">
              <div>
                <img src={call} alt="" />
              </div>
              <div>
                <h3 className="text-[#1A3D37] text-xl font-semibold">
                24/7 Technical Support
                </h3>
              </div>
            </div>
          </div>
          <div>
            <img src={man} alt="" />
          </div>
        </div>
      </div>

  );
};

export default OurSolutions;
