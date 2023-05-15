import React from "react";
import p1 from "../../../assets/imgCard/p1.png";
import p2 from "../../../assets/imgCard/p2.png";
import p3 from "../../../assets/imgCard/p3.png";
import p4 from "../../../assets/imgCard/p4.png";
import p5 from "../../../assets/imgCard/p5.png";
import p6 from "../../../assets/imgCard/p6.png";
import './Projects.css'

const Projects = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-28 mt-10 md:mt-36">
      <div className="text-center">
        <p>Projects</p>
        <h1 className="text-[#0F172A] font-semibold text-2xl md:text-5xl">
          Latest Project We Have Delivered
        </h1>
      </div>
   
      <div className="grid mt-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        <div>
          <div className="shadow-lg  group container max-w-sm flex justify-center items-center  mx-auto content-div">
            <div className=" ">
              <img className="rounded-2xl" src={p1} alt="" />
            </div>
            <div className="absolute  opacity-0 fd-sh group-hover:opacity-100">
              <div className="pt-40  text-bottom">
                <button className="text-center rounded-lg p-4 bg-white learn text-gray-700 font-bold text-lg">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-lg group container max-w-sm flex justify-center items-center   mx-auto content-div">
            <div>
              <img src={p2} alt="" />
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <div className="pt-40 text-bottom">
                <button className="text-center rounded-lg p-4 bg-white learn text-gray-700 font-bold text-lg">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-lg group container max-w-sm flex justify-center items-center   mx-auto content-div">
            <div>
              <img src={p3} alt="" />
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <div className="pt-40 text-bottom">
                <button className="text-center rounded-lg p-4 bg-white learn  text-gray-700 font-bold text-lg">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-lg group container max-w-sm flex justify-center items-center   mx-auto content-div">
            <div>
              <img src={p4} alt="" />
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <div className="pt-40 text-bottom">
                <button className="text-center rounded-lg p-4 bg-white learn  text-gray-700 font-bold text-lg">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-lg group container max-w-sm flex justify-center items-center   mx-auto content-div">
            <div>
              <img src={p5} alt="" />
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <div className="pt-40 text-bottom">
                <button className="text-center rounded-lg p-4 bg-white learn  text-gray-700 font-bold text-lg">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-lg group container max-w-sm flex justify-center items-center  mx-auto content-div">
            <div>
              <img src={p6} alt="" />
            </div>
            <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
              <div className="pt-40 text-bottom">
                <button className="text-center rounded-lg p-4 bg-white learn  text-gray-700 font-bold text-lg">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
