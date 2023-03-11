import React from "react";
import Discount from "../components/Home/Discount";
import HeroSection from "../components/Home/HeroSection";
import InfiniteSlider from "../components/Slider/Infinite Slider/Infinite Slider";
import NewArrivals from "../components/Home/NewArrivals";

function Home() {
  return (
    <>
      <HeroSection />
      <Discount />
      <NewArrivals />
    </>
  );
}

export default Home;
