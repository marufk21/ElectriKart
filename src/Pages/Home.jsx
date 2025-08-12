import React from "react";
import HeroSection from "../Components/HeroSection";
import Trusted from "../Components/Trusted";
import Services from "../Components/Services";
import FeaturedProducts from "../Components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="px-4 mx-auto max-w-7xl">
        <Services />
        <FeaturedProducts />
        <Trusted />
      </section>
    </>
  );
};

export default Home;
