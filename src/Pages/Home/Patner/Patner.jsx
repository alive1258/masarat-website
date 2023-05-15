import React from 'react';
import bitcoin from '../../../assets/imgPatner/bitcoyen.png'
import visa from '../../../assets/imgPatner/visha.png'
import litecoin from '../../../assets/imgPatner/v2.png'
import binance from '../../../assets/imgPatner/binance.png'
import entham from '../../../assets/imgPatner/entharam.png'

const Patner = () => {
    return (
        <div className='mx-auto max-w-[1440px] md:px-28 px-6  pt-60 pb-4'>
           <div className='md:text-center pb-4'>
            <p>Over 1,700+ trusted partner around the world</p>
           </div>
           <div className='md:flex  mt-2 md:justify-center md:gap-28 items-center'>
           <div className='mb-6'>
                <img src={bitcoin} alt="" />
            </div>
            <div className='mb-6'>
            <img src={visa} alt="" />
            </div>
            <div className='flex mb-6'>
                <img src={litecoin} alt="" />
                <p className='text-2xl'>litecoin</p>
            </div>
            <div className='mb-6'>
                <img src={binance} alt="" />
            </div>
            <div>
                <img src={entham} alt="" />
            </div>
           </div>
        </div>
    );
};

export default Patner;