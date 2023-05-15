import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import ResponsiveNavbar from '../components/ResponsiveNavbar/ResponsiveNavbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <ResponsiveNavbar></ResponsiveNavbar>             */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;