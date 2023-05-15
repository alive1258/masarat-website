import React from 'react';
import aq1 from '../../../assets/image/aq1.png'
import aq2 from '../../../assets/image/aq2.png'
import aq4 from '../../../assets/image/aq4.png'


const AskedQuestion = () => {
    return (
        <div className='mx-auto max-w-[1440px] px-6 md:px-28'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div>
                    <p className='text-[#1A3D37] font-normal text-lg mt-48'>Common Questions</p>
                    <h1 className='text-[#0F172A] text-2xl md:text-5xl font-bold my-4 '>Frequently Asked <br /> Questions</h1>

                    <div className='mt-10 mb-8'>
                        <div tabIndex={0} className="collapse collapse-arrow  bg-base-100 border-b border-[#E5EAF1]">
                            <div className="collapse-title md:text-xl font-medium">
                                Lorem ipsum dolor sit amet, consect etur adipiscing elit
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                                    Quisque purus diam, elementum sed lectus eu, sollicit <br />
                                    rutrum odio. Vivamus finibus scelerisque massa, nec <br />
                                    efficitur lacus bibendum a.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow  bg-base-100 border-b border-[#E5EAF1]">
                            <div className="collapse-title md:text-xl font-medium">
                                Lorem ipsum dolor sit amet, consect etur adipiscing elit
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Quisque purus diam, elementum sed lectus eu, sollicit <br />
                                    rutrum odio. Vivamus finibus scelerisque massa, nec <br />
                                    efficitur lacus bibendum a.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-b border-[#E5EAF1]">
                            <div className="collapse-title md:text-xl font-medium">
                                Lorem ipsum dolor sit amet, consect etur adipiscing elit
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                    Quisque purus diam, elementum sed lectus eu, sollicit <br />
                                    rutrum odio. Vivamus finibus scelerisque massa, nec <br />
                                    efficitur lacus bibendum a.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mb-8 gap-4'>
                    <div className='mt-[170px]'>
                        <img src={aq4} alt="" />
                    </div>
                    <div className='mt-[110px]'>
                        <img src={aq2} alt="" />
                    </div>
                    <div className='mt-[200px]'>
                        <img src={aq1} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AskedQuestion;