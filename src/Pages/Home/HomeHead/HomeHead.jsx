import React from 'react';
// import Navbar from '../../../components/Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import './HomeHead.css'
// import hand from '../../../assets/image/hand.jpg'
// import NavbarHome from '../NavbarHome/NavbarHome';
import ResponsiveNavbar from '../../../components/ResponsiveNavbar/ResponsiveNavbar';

const HomeHead = () => {
    return (
    
          <div className='h-[700px]'>
          {/* <Navbar></Navbar> */}
           {/* <NavbarHome></NavbarHome> */}
           <ResponsiveNavbar></ResponsiveNavbar>
            {/* <Banner></Banner>  */}
          </div>
         
    );
};

export default HomeHead;