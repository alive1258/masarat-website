import React from "react";
import ceo from '../../../assets/image/ceo.jpg'

const Banner = () => {
  return (
    <div>
   <div className="mx-auto max-w-[1440px] px-28 ">
   <div className="flex gap-4 py-6">
        <div className="bg-black relative h-8 w-8 rounded-full">
          <img
            className=" h-6 w-6 absolute top-1 left-1 rounded-full"
            src="https://i.pinimg.com/564x/96/c0/f7/96c0f7a7bbbddbf0b03a0c548a12596e.jpg"
            alt=""
          />
          {/* <img className=" h-6 w-6 text-white" src={handshek} alt="" /> */}
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Best Supportive Team Ever</h3>
        </div>
      </div>

      <div className="space-y-8 pt-4">
        <h1 className="text-6xl text-[#1A3D37] font-bold">
          We Support To <br /> Grow Your Business
        </h1>
        <p>
          Choose Masarat Digital to get software development, AI & Tech <br />
          Consulting support for your digital products.{" "}
        </p>
        <button className="bg-[#9BEBA8] delay-200 text-[#657790] font-semibold hover:text-white hover:bg-[#9fdda8] px-5 py-4 rounded-lg">
          Contact Us
        </button>
      </div>
      <div className="pt-16">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            // checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua Utenimad minim veniam.
        </p>
      </div>
      <div className="pt-6 flex gap-2">
        <div>
          <img className="h-[50px] w-[50px] rounded-full" src={ceo} alt="" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#0F172A]">Sulli Kiri</h3>
          <p>CEO, Supreme World.</p>
        </div>
      
    </div>
    <div className="flex gap-2 items-center pt-2">
        <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
        <div className="w-12 h-2 bg-[#657790] rounded-lg"></div>
        <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
        <div className="h-3 w-3 rounded-full bg-[#657790]"></div>
    </div>

   </div>
    </div>
  );
};

export default Banner;
