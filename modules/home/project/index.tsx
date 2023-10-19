import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    imgSrc: "/images/si.webp",
    alt: `Study International Logo`,
    title: `Study International (Study Abroad Portal)`,
    tooles: ["Nextjs", "Ant Design", "Nestjs", "Redux", "Tailwind"],
    link: `https://studyinternational.net.au/`,
  },
  {
    imgSrc: "/images/m4yours.webp",
    alt: `Study International Logo`,
    title: `M4YOURS IT (Portfolio)`,
    tooles: ["Nextjs", "Ant Design", "Nestjs", "Redux", "Tailwind"],
    link: `https://m4yours.com/`,
  },
  {
    imgSrc: "/images/world-uni-hub.webp",
    alt: `Study International Logo`,
    title: `World University Hub (Study Abroad)`,
    tooles: ["Nextjs", "Ant Design", "Nestjs", "Redux", "Tailwind"],
    link: `https://worldunihub.com/`,
  },
  {
    imgSrc: "/images/move-int.webp",
    alt: `Study International Logo`,
    title: `Moves International (Study Abroad)`,
    tooles: ["Nextjs", "Ant Design", "Nestjs", "Redux", "Tailwind"],
    link: `https://move-int-web.superairtravel.com/`,
  },
  {
    imgSrc: "/images/onbd24.webp",
    alt: `Study International Logo`,
    title: `24ONBD (News Portal)`,
    tooles: ["Nextjs", "Ant Design", "Nestjs", "Redux", "Tailwind"],
    link: `https://www.24onbd.com/`,
  },
];
const Projects = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h1 className="text-center mb-12">Projects</h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-[30px]">
          {data?.map((item: any, i: any) => {
            return (
              <Link
                key={i}
                href={item?.link}
                className="hover:shadow-[0_4px_6px_0_rgba(0,0,0,0.04)] transition-all border rounded-md"
              >
                <Image
                  src={item?.imgSrc}
                  alt={item?.alt}
                  width={960}
                  height={540}
                  className="transition-all duration-500 rounded-t-md"
                />
                <div className="p-4">
                  <h5 className="hover:text-secondary mb-3">{item?.title}</h5>

                  <div className="flex items-center flex-wrap gap-3 mb-2">
                    <span className="text-lg font-medium ">Used tools:</span>
                    {item?.tooles?.map((itm: any, index: any) => {
                      return (
                        <span
                          className="text-base font-medium bg-[#f860111a] px-2 rounded-md"
                          key={index}
                        >
                          {itm}
                        </span>
                      );
                    })}
                  </div>

                  <p className="mb-0 text-lg hover:underline underline-offset-2 hover:text-secondary transition-all inline-block">
                    View Project
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
