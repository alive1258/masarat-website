import React from "react";
import m1 from '../../../assets/imgCard/m1.png'
import m2 from '../../../assets/imgCard/m2.png'
import m3 from '../../../assets/imgCard/m3.png'
import m4 from '../../../assets/imgCard/m4.png'
import m5 from '../../../assets/imgCard/m5.png'

const Team = () => {
  return (
    <div className="mx-auto px-6 md:px-28 max-w-[1400px] mt-10 md:mt-36">
        
            <p className="font-semibold">Meet the team</p>
            <h1 className="md:text-5xl text-2xl mt-4 font-semibold text-[#0F172A]">Profession Expert team</h1>
       
      <div className="md:flex md:gap-4  md:justify-center py-10">
       
      
      <div className="max-w-sm mb-4 flex md:justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
            
              <img className="w-full" src={m1} alt="" />
            
            <div className="absolute opacity-0 hover:opacity-100">
              <div className="pt-40 text-bottom">
                <button className="text-center rounded-lg p-2 bg-white learn  text-gray-700 text-sm">
                  <p>Data Operator</p>
                  <p>Antham </p>
                </button>
              </div>
            </div>
          </div>
    


          <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
            
            <img className="w-full" src={m2} alt="" />
          
          <div className="absolute opacity-0 hover:opacity-100">
            <div className="pt-40 text-bottom">
              <button className="text-center rounded-lg p-2 bg-white learn  text-gray-700 text-sm">
              <p>Manager</p>
                  <p>Jack </p>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
            
            <img className="w-full" src={m3} alt="" />
          
          <div className="absolute opacity-0 hover:opacity-100">
            <div className="pt-40 text-bottom">
              <button className="text-center rounded-lg p-2 bg-white learn text-gray-700 text-sm">
              <p>Manager</p>
                  <p>Jack </p>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
            
            <img className="w-full" src={m4} alt="" />
          
          <div className="absolute opacity-0 hover:opacity-100">
            <div className="pt-40 text-bottom">
              <button className="text-center rounded-lg p-2 bg-white learn text-gray-700 text-sm">
              <p>Manager</p>
                  <p>Jack </p>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
            
            <img className="w-full" src={m1} alt="" />
          
          <div className="absolute opacity-0 hover:opacity-100">
            <div className="pt-40 text-bottom">
              <button className="text-center rounded-lg p-2 bg-white learn text-gray-700 text-sm">
              <p>Manager</p>
                  <p>Jack </p>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm mb-4 flex justify-center items-center transform transition duration-500 hover:opacity-100 hover:scale-y-125">
            
            <img className="w-full" src={m5} alt="" />
          
          <div className="absolute opacity-0 hover:opacity-100">
            <div className="pt-40 text-bottom">
              <button className="text-center rounded-lg p-2 bg-white learn text-gray-700  text-sm">
              <p>Manager</p>
                  <p>Jack </p>
              </button>
            </div>
          </div>
        </div>



     

      </div>
    </div>
  );
};

export default Team;
