"use client";
import React, { useState } from "react";

const MyWork = () => {
  const [skill, setSkill] = useState("");
  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-center mb-8">
          <h3 className="text-center text-secondary mb-0 font-normal">
            MY SKILL'S
          </h3>
        </div>
        <div className="grid grid-cols-2 max-w-[800px] mx-auto">
          <div
            className={`flex justify-center p-2 border cursor-pointer ${
              skill == `expert` ? `bg-secondary text-white` : ``
            }`}
            onClick={() => setSkill("expert")}
          >
            <p className="mb-0 font-medium">Expert Level</p>
          </div>
          <div
            className={`flex justify-center p-2 border cursor-pointer ${
              skill == `good` ? `bg-secondary text-white` : ``
            }`}
            onClick={() => setSkill("good")}
          >
            <p className="mb-0 font-medium">Good Knowledge</p>
          </div>
        </div>
        <div className="max-w-[800px] mx-auto">
          {skill == "expert" && (
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
          {skill == "good" && (
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

export default MyWork;
