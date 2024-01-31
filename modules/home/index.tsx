import React from "react";
import HomeHero from "./home-hero";
import MyWork from "./my-work";
import ChipTabs from "./test";
import HomeHeroTwo from "./home-hero-two";
import Projects from "./project";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiDualSim1Line } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <HomeHeroTwo />
      {/* <HomeHero /> */}
      {/* <MyWork /> */}
      <section>
        <div className="container max-w-[400px] w-full">
          <h3 className="font-normal mb-5">Call history details</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-16">
              <div>
                <p className="font-semibold mb-1">6:38 PM</p>
                <p className="text-xs font-light	">+8801710430601</p>
              </div>
              <div className="flex gap-1">
                <p className="text-xs">Rejected</p>
                <RiDualSim1Line />
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
            <div className="flex items-center justify-between gap-16">
              <div>
                <p className="font-semibold  mb-1">6:38 PM</p>
                <p className="text-xs font-light	">+8801710430601</p>
              </div>
              <div className="flex gap-1">
                <p className="text-xs">Rejected</p>
                <RiDualSim1Line />
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
            <div className="flex items-center justify-between gap-16">
              <div>
                <p className="font-semibold mb-1">6:37 PM</p>
                <p className="text-xs font-light	">+8801710430601</p>
              </div>
              <div className="flex gap-1">
                <p className="text-xs">Rejected</p>
                <RiDualSim1Line />
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>

            <div className="flex items-center justify-between gap-16">
              <div>
                <p className="font-semibold mb-1">Jan 29 4:28 PM</p>
                <p className="text-xs font-light	">+8801710430601</p>
              </div>
              <div className="flex gap-1">
                <p className="text-xs">Outgoing : 1m 42 sec</p>
                <RiDualSim1Line />
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
            <div className="flex items-center justify-between gap-16">
              <div>
                <p className="font-semibold mb-1">Jan 24 10:25 AM</p>
                <p className="text-xs font-light	">+8801710430601</p>
              </div>
              <div className="flex gap-1">
                <p className="text-xs">Incoming : 9 min</p>
                <RiDualSim1Line />
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChipTabs />
      <Projects />
    </>
  );
};

export default Home;
