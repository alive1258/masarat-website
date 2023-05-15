import React from 'react';
import play from '../../../assets/image/play.png'
import playimg from '../../../assets/image/playimg.png'

const Work = () => {
    return (
        <div className='md:mt-36 mt-10 mx-auto max-w-[1440px]  mb-12'>
            <div className='text-center'>
                <h5 className='text-lg text-[#1A3D37]          '>Our Works</h5>
                <h1 className='md:text-5xl text-2xl text-[#0F172A]'>This is How We Works</h1>
            </div>
         <div className='flex px-6 justify-center mt-16'>
         <div className='relative'>
                <div>
                    <img src={playimg} alt="" />
                </div>
                <div className='absolute bottom-1 left-36'>
                    <img src={play} alt="" />
                </div>
            </div>
         </div>
             {/* <video width="750" height="500" controls >
      <source src="..Videos/video1.mp4" type="video/mp4"/> */}
     {/* </video> */}
        </div>
    );
};

export default Work;