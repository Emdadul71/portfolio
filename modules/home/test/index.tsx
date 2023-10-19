"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = ["Expert Level", "Good Knowledge"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col justify-center mb-8">
          <h2 className="text-center text-primary mb-0">MY SKILL'S</h2>
        </div>
        <div className="max-w-[800px] mx-auto  grid grid-cols-2">
          {tabs.map((tab) => (
            <Chip
              text={tab}
              selected={selected === tab}
              setSelected={setSelected}
              key={tab}
            />
          ))}
        </div>
        <div className="max-w-[800px] mx-auto">
          {selected == tabs[0] && (
            <div className="py-8 px-16 bg-[#efefef] rounded-b-lg">
              <div className="flex gap-4 flex-wrap">
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  JavaScript
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  TypeScript
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  React.js
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Next.js
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Redux.js(RTK Query)
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Ant Design
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Tailwind CSS
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Bootstrap
                </span>
              </div>
            </div>
          )}
          {selected == tabs[1] && (
            <div className="py-8 px-16 bg-[#efefef] rounded-b-lg min-h-[144px]">
              <div className="flex gap-4 flex-wrap">
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Wordpress
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Figma
                </span>
                <span className="inline-block px-3 py-1 rounded-md bg-[#f860111a]">
                  Git and GitHub
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Chip = ({ text, selected, setSelected }: any) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white border"
          : "text-primary hover:text-white hover:bg-secondary"
      } text-sm transition-colors px-2.5 py-2 border relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-primary  py-2"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
