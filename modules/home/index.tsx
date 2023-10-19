import React from "react";
import HomeHero from "./home-hero";
import MyWork from "./my-work";
import ChipTabs from "./test";
import HomeHeroTwo from "./home-hero-two";
import Projects from "./project";

const Home = () => {
  return (
    <>
      <HomeHeroTwo />
      {/* <HomeHero /> */}
      {/* <MyWork /> */}

      <ChipTabs />
      <Projects />
    </>
  );
};

export default Home;
