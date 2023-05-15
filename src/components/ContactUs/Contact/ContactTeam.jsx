import React from 'react';
import phone from '../../../assets/image/phone.png'
import location from '../../../assets/image/location.png'
import email from '../../../assets/image/email.png'

const ContactTeam = () => {
    return (
        <div className='mx-auto  max-w-[1440px] mt-10 md:mt-36 mb-10 md:mb-24 md:px-28'>
            <div className='bg-white px-6 md:px-20 py-12 shadow-2xl mb-4 '>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div >
                        <p className='text-sm font-normal text-[#1A3D37]'>Contact us</p>
                        <h1 className='md:text-5xl text-2xl mt-2 text-[#0F172A] font-bold'>Contact Our Team,<br />
                            Feel free to talk about <br />
                            anything.</h1>
                        <div className='mt-12 '>
                            <div className='flex mb-10 items-center gap-5'>
                                <img src={location} alt="" />
                                <p>Al Dabab Street, Al Ma'azer Dist.Riyadh</p>
                            </div>
                            <div className='flex mb-10  items-center gap-5'>
                                <img src={phone} alt="" />
                                <p>(01) 4044875</p>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={email} alt="" />
                                <p>info@masadigi.sa</p>
                            </div>
                        </div>

                    </div>
                    <div className='mt-10'>
                        <div>
                            <input type="text" placeholder="Name" className="input input-bordered w-full " />
                        </div>
                        <div className='md:flex gap-6 md:mt-8 mt-4'>
                            <input type="text" placeholder="Email" className="input input-bordered w-full md:mt-2" />
                            <input type="text" placeholder="Phone" className="input input-bordered w-full md:mt-2 mt-4" />

                        </div>
                        <div className='mt-10'>
                        <textarea className="textarea textarea-bordered h-36 w-full" placeholder="Your Quenstions"></textarea>

                        </div>
                        <div className='mt-8'>
                            <button className='px-12 rounded-lg py-4 text-sm font-normal text-[#657790] bg-[#B7F1C0]'>Send Massage</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactTeam;