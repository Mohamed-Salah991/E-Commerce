import React from "react";
import Discount from "../components/Home/Discount";
import HeroSection from "../components/Home/HeroSection";
import InfiniteSlider from "../components/Slider/Infinite Slider/Infinite Slider";
import NewArrivals from "../components/Home/NewArrivals";
import Footer from "../components/Home/Footer";
import Banner from "../components/Home/Banner";

function Home() {
  return (
    <>
      <HeroSection />
      <Discount />
      <NewArrivals />
      <Banner />
      <InfiniteSlider />
      <Footer />
    </>
  );
}

export default Home;
