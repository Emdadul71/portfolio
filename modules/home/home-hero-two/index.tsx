import React from "react";

const HomeHeroTwo = () => {
  return (
    <section className="mb-[80px]">
      <div>
        <div className="grid h-screen lg:h-[calc(100vh-75px)] w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))] ">
          {new Array(250)?.fill(1)?.map((_, i) => {
            return (
              <div
                key={i}
                // className="h-full w-full border-[1px] border-neutral-900 bg-black hover:bg-transparent hover:border-white transition-all duration-300"
                className="h-full w-full border-[1px] border-neutral-900 bg-black hover:bg-white hover:border-white transition-all duration-300"
              ></div>
            );
          })}

          <div className="pointer-events-none absolute inset-0 flex flex-col lg:flex-row items-center justify-center pt-10  max-w-[1500px] mx-auto gap-[30px]">
            {/* left */}
            <div className="relative w-1/2 flex justify-center items-center h-full z-20">
              {/* front */}
              <div className="bg-gray-800 rounded-lg custom-shadow w-terminal  z-[15] w-full">
                <div className="flex items-center">
                  <div className="flex items-center space-x-2 p-3">
                    <div className="bg-red-500 rounded-full w-3 h-3"></div>
                    <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                    <div className="bg-green-500 rounded-full w-3 h-3"></div>
                  </div>
                  <h1 className="text-blue-500 text-base mb-0">console.log</h1>
                </div>

                <div className="h-full px-6 lg:py-[50px] pointer-events-auto">
                  <h1 className="text-white h3">
                    <span className="block">Hi I'm</span>
                    <span>Emdadul Hoque</span>
                  </h1>

                  <h1 className="bg-white p-2 rounded-md h2 mb-0">
                    A FrontEnd Engineer
                  </h1>
                  <div className="flex justify-center mt-8">
                    <button className="btn btn-white rounded-md">
                      Download CV
                    </button>
                  </div>
                </div>
              </div>

              {/* back */}
              <div className="absolute z-[10] bg-gray-800 rounded-lg w-terminal h-96 transform rotate-6 translate-x-6 -translate-y-6 opacity-75">
                <div className="flex items-center space-x-2 p-3">
                  <div className="bg-red-500 rounded-full w-3 h-3"></div>
                  <div className="bg-yellow-500 rounded-full w-3 h-3"></div>
                  <div className="bg-green-500 rounded-full w-3 h-3"></div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="w-1/2 h-full flex justify-center items-center">
              <img
                src="/images/hero-inner.jpg"
                alt=""
                className="w-[100px] lg:w-[200px] h-[100px] lg:h-[200px] rounded-full border-4 border-white custom-shadow p-1"
              />
              {/* inner */}
              <div className="hw-inner  flex justify-between items-center absolute border  border-white rounded-full custom-ani">
                <div className="bg-white overflow-hidden rounded-full custom-shadow h-10 w-10 flex justify-center items-center transform -translate-x-5 ">
                  <img
                    src="/images/js-logo.png"
                    alt=""
                    className="h-9 w-9 object-center rounded-full rotate-img"
                  />
                </div>
                <div className="bg-white overflow-hidden rounded-full custom-shadow h-10 w-10 flex justify-center items-center transform translate-x-5">
                  <img
                    src="/images/js-logo.png"
                    alt=""
                    className="h-9 w-9 object-center rounded-full rotate-img"
                  />
                </div>
              </div>
              {/* outer */}

              <div className="hw-outer flex justify-between items-center absolute border border-white  rounded-full custom-ani-2">
                <div className="flex justify-between items-center h-full w-full">
                  <div className="bg-white overflow-hidden rounded-full custom-shadow h-10 w-10 flex justify-center items-center transform translate-x-12 translate-y-40">
                    <img
                      src="/images/redux-logo.png"
                      alt=""
                      className="h-9 w-9 object-center rounded-full rotate-img"
                    />
                  </div>
                  <div className="bg-white p-1 overflow-hidden rounded-full custom-shadow h-10 w-10 flex justify-center items-center transform -translate-x-12 -translate-y-40">
                    <img
                      src="/images/nextjs.png"
                      alt=""
                      className="h-9 w-9 object-center rounded-full rotate-img "
                    />
                  </div>
                </div>

                <div className="flex justify-between absolute items-center w-full h-full">
                  <div className="bg-white p-1 overflow-hidden rounded-full custom-shadow h-10 w-10 flex justify-center items-center transform translate-x-12 -translate-y-40">
                    <img
                      src="/images/react-logo.png"
                      alt=""
                      className="h-9 w-9 object-center rounded-full rotate-img"
                    />
                  </div>
                  <div className="bg-white p-1 overflow-hidden rounded-full custom-shadow h-10 w-10 flex justify-center items-center transform -translate-x-12 translate-y-40">
                    <img
                      src="/images/tailwind.png"
                      alt=""
                      className="h-9 w-9 object-center rounded-full rotate-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroTwo;
