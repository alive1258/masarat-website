import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import play from '../../../assets/image/play.png'
import playimg from '../../../assets/image/playimg.png'

const DegitalService = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-6 md:px-28 mt-36 mb-8">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
        <div>
          <div className="flex my-4 px-5 justify-between w-72 text-[16px] font-normal items-center bg-white shadow-lg  py-2 rounded-lg">
            <p>
              <Link to="strategy">Digital Strategy</Link>
            </p>
            <p>
              <HiChevronRight />
            </p>
          </div>
          <div className="flex my-4 px-5 justify-between w-72 text-[16px] font-normal items-center bg-white shadow-lg  py-2 rounded-lg">
            <p>
              <Link to="strategy">process Re-Engineering</Link>
            </p>
            <p>
              <HiChevronRight />
            </p>
          </div>
          <div className="flex my-4 px-5 justify-between w-72 text-[16px] font-normal items-center bg-white shadow-lg  py-2 rounded-lg">
            <p>
              <Link to="strategy">Digital Marketing</Link>
            </p>
            <p>
              <HiChevronRight />
            </p>
          </div>
          <div className="flex my-4 px-5 justify-between w-72 text-[16px] font-normal items-center bg-white shadow-lg  py-2 rounded-lg">
            <p>
              <Link to="strategy">Digital Transformation</Link>
            </p>
            <p>
              <HiChevronRight />
            </p>
          </div>
          <div className="flex my-4 px-5 justify-between w-72 text-[16px] font-normal items-center bg-white shadow-lg  py-2 rounded-lg">
            <p>
              <Link to="strategy">Digital Enablement</Link>
            </p>
            <p>
              <HiChevronRight />
            </p>
          </div>
          <div className="flex my-4 px-5 justify-between w-72 text-[16px] font-normal items-center bg-white shadow-lg  py-2 rounded-lg">
            <p>
              <Link to="strategy">Digital Strategy</Link>
            </p>
            <p>
              <HiChevronRight />
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <p>Detail Service</p>
          <h1 className="md:text-5xl text-2xl font-semibold text-[#0F172A]">Digital Strategy</h1>
          <p className="mt-12">Our Digital Strategy service is designed to help businesses develop a cohesive and effective plan for
            their online presence. We start by understanding your business goals and objectives, and then we
            analyse your digital footprint to identify areas for improvement.
            Our team of experts will work with you to create a customised strategy that includes search engine
            optimisation, social media marketing, content marketing and online advertising</p>

          <div className='flex justify-center mt-16'>
            <div className='relative'>
              <div>
                <img src={playimg} alt="" />
              </div>
              <div className='absolute bottom-1 left-36'>
                <img src={play} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-20">
            <p>Once the strategy is in place, we will help you execute it, providing ongoing support and guidance to
              ensure that you achieve your desired results. We will continually monitor and evaluate theperformance of your digital channels and make adjustments as needed to optimise your ROI.
              With our Digital Strategy service, you can rest assured that you are maximising the potential of your
              online presence and staying ahead of the competition. Contact us today to learn more about how we
              can help your business succeed in the digital world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegitalService;
