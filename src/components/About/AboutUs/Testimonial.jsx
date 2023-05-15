import React, { Component } from "react";
import ceo from '../../../assets/image/ceo.jpg'


const Testimonial = () => {



  return (
    <div className="md:mt-36 mt-10 mx-auto px-6 md:mb-4 max-w-7xl">
      
      <div className="grid md:grid-cols-2 grid-cols-1 items-center py-6 px-6 md:px-24 md:gap-8 bg-[#F6F7FB] rounded-lg md:rounded-[64px] md:h-[600px]">
        <div>
          <p>Testimonial</p>
          <h1 className="text-[#0F172A] mt-4 text-2xl md:text-5xl font-semibold">
            Latest Project We Have Delivered
          </h1>
        </div>

        <div>
      <div id="content flex">
      <div className="md:pt-16">
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

            <div className="pt-6 flex gap-2">
            <div>
              <img className="h-[50px] w-[50px] rounded-full" src={ceo} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#0F172A]">Sulli Kiri</h3>
              <p>CEO, Supreme World.</p>
            </div>
          </div>
          <div>
     
      </div>
         
          </div>

      </div>
          <div className="mt-8">
            <div className="flex gap-4  justify-start transform -top-12 left-0">
              <a  className="btn btn-outline h-12 w-12 rounded-full">
                ❮
              </a>
              <a  className="btn btn-outline h-12 w-12 rounded-full">
                ❯
              </a>
            </div>
          </div>
       


        </div>
      </div>
    </div>
  );
};


export default Testimonial;
