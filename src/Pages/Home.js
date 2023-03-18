import React from "react";
import Discount from "../components/Home/Discount";
import HeroSection from "../components/Home/HeroSection";
import InfiniteSlider from "../components/Slider/Infinite Slider/Infinite Slider";
import NewArrivals from "../components/Home/NewArrivals";
import Banner from "../components/Home/Banner";
import Trust from "../components/Home/Trust";

function Home() {
  return (
    <>
      <HeroSection />
      <Discount />
      <NewArrivals />
      <Banner />
      <Trust />
      <InfiniteSlider />
    </>
  );
}

export default Home;
