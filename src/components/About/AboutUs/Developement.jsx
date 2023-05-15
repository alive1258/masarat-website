import React from "react";
import hand2 from '../../../assets/image/hand2.png'

const Developement = () => {
  return (
    <div className="mx-auto max-w-[1440px] px-6 mt-16">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:pl-24">
          <p>About Us</p>
          <h1 className="md:text-5xl text-2xl pt-4 font-semibold">
            We Have 15 Years Of <br />
            Experience On Business <br />
            Development area
          </h1>
          <p className="pt-6">
            Masarat Digital is a Technology company that provide software
            development, AI & Tech Consulting. <br />
            Masarat Digital Company is advance technology enabler in various
            industries/ tracks / paths (HR, Healthcare, Supply Chain & Sports).
            For the consulting area, <br />
            Masarat is focusing on digital strategy, process reengineering,
            digital marketing, digital transformation, digital enablement, and
            advanced analytics.
          </p>
          <div className="flex gap-28 pt-12">
            <div>
                <p className="font-bold text-2xl">1432+</p>
                <p>Happy Clients</p>
            </div>
            <div>
            <div>
                <p className="font-bold text-2xl">2534+</p>
                <p>Project Completed</p>
            </div>
            </div>
          </div>
          <div className="pt-8 mb-6">
            <button className="bg-[#9BEBA8] px-4 py-2 rounded-lg">View Services</button>
          </div>
        </div>
        <div>
            <img src={hand2} alt="" />
        </div>
      </div>

    
    </div>
  );
};

export default Developement;
