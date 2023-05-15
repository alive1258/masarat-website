import React from "react";
// import Navbar from "../../../components/Shared/Navbar/Navbar";
// import Banner from "../Banner/Banner";
import "./Home.css";
import Patner from "../Patner/Patner";
import Products from "../Products/Products";
import OurSolutions from "../OurSolutions/OurSolutions";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import ContactHome from "../ContactHome/ContactHome";
import Footer from "../../../components/Shared/Footer/Footer";
import HomeHead from "../HomeHead/HomeHead";

const Home = () => {
  return (
    <div className="">
      <HomeHead></HomeHead>
      {/* <Navbar></Navbar>
      <Banner></Banner> */}
      <Patner></Patner>
      <Products></Products>
      <OurSolutions></OurSolutions>
      <Projects></Projects>
      <Team></Team>
      <ContactHome></ContactHome>
      <Footer></Footer>
    </div>
  );
};

export default Home;
