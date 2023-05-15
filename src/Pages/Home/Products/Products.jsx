import React from "react";
import "./Products.css";
import fame from "../../../assets/imgCard/fame.png";
import v2 from "../../../assets/imgCard/v2.png";
import v3 from "../../../assets/imgCard/v3.png";
import group from "../../../assets/imgCard/group.png";
import { HiArrowRight } from "react-icons/hi";

const Products = () => {
  return (
    <div className="md:mt-[150px] mt-10 pb-12 mx-auto max-w-[1440px] md:px-28">
      <div className="text-center">
        <h6 className="text-[#1A3D37] md:text-lg font-semibold">
          Our Products & Services
        </h6>
        <h1 className="text-[#0F172A] text-xl md:text-5xl font-bold">
          What You Can Get From Us
        </h1>
      </div>
      <div className="bgcard pt-8 mt-4 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-6">
          <div className="rounded-lg py-10 shadow-md overflow-hidden  transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={v2} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Digital Strategy
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>

         
           
          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#f7f9f7]  transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={v2} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Digital Strategy
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#f7f9f7]  transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={v3} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Digital Strategy
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#f7f9f7] transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={group} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Digital Strategy
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#f7f9f7] transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={fame} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Digital Strategy
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg py-10 shadow-md overflow-hidden bg-[#f7f9f7] transition duration-200 ease-in-out hover:bg-white opacity-100">
          <div className="pl-8 ">
              <img src={v3} alt="" />
            </div>
            <div className="pl-8 pt-16">
              <h2 className="text-[#0F172A] text-2xl font-bold">
                Digital Strategy
              </h2>
              <p className="pt-4">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed <br />
                doeiusmod tempor incididunt{" "}
              </p>
              <div className="flex gap-4 items-center pt-6">
                <div>
                  <h2 className="text-[#1A3D37] text-lg font-semibold">
                    Read More
                  </h2>
                </div>
                <div>
                  <HiArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
