import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Developement from './AboutUs/Developement';
import Marketing from './AboutUs/Marketing';
import Team from '../../Pages/Home/Team/Team';
import Work from './AboutUs/Work';
import Testimonial from './AboutUs/Testimonial';
import ContactHome from '../../Pages/Home/ContactHome/ContactHome';

const About = () => {
    return (
        <div>
            <AboutUs></AboutUs>
            <Developement></Developement>
            <Marketing></Marketing>
            <Team></Team>
            <Work></Work>
            <Testimonial></Testimonial>
           <ContactHome></ContactHome>
        </div>
    );
};

export default About;