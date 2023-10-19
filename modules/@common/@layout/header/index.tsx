"use client";
import SocialLinks from "@/modules/@common/social_links";
import {
  Button,
  Divider,
  Drawer,
  DrawerProps,
  RadioChangeEvent,
  Select,
  Space,
} from "antd";
import { Fragment, useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaMobileAlt, FaRegMap } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { HiOutlineEnvelope } from "react-icons/hi2";
import styles from "./header.module.css";
import navData from "@/helpers/data/nav.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const path = usePathname();
  const [address, setAddress] = useState("sydney");

  // Scroll Efect

  useEffect(() => {
    const handleScroll = () => {
      //   console.log("window.scrollY", window.scrollY);

      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[999] ">
        {/* <div className="bg-[url('/images/hero-bg.jpg')]">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] justify-between items-center lg:gap-5 py-2">
              <SocialLinks />
              <div className="flex justify-center lg:justify-end items-center gap-1 lg:gap-5 ">
                <div className="flex py-2 gap-2 lg:gap-3">
                  {address === "sydney" && (
                    <>
                      <div className="hidden md:flex items-center gap-[6px] ">
                        <CiClock2 className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Mon – Fri 9.00 – 17.00
                        </div>
                      </div>

                      <div className="group">
                        <a
                          href="tel:880 0280689051"
                          className="flex items-center gap-[6px] text-white group-hover:text-secondary"
                        >
                          <FaMobileAlt className="text-white group-hover:text-secondary " />
                          <span className="text-[10px] lg:text-xs">
                            (02) 8068 9051
                          </span>
                        </a>
                      </div>

                      <div className="group">
                        <a
                          href="mailto:info@mieducation.com.au"
                          className="flex items-center gap-[6px] text-white  "
                        >
                          <HiOutlineEnvelope className="text-white group-hover:text-secondary" />
                          <span className="text-[10px] lg:text-xs group-hover:text-secondary">
                            info@mieducation.com.au
                          </span>
                        </a>
                      </div>

                      <div className="md:flex items-center gap-[6px] hidden">
                        <FaRegMap className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Level 2/251 Elizabeth St, Sydney NSW 2000
                        </div>
                      </div>
                    </>
                  )}
                  {address === "perth" && (
                    <>
                      <div className="hidden md:flex items-center gap-[6px] ">
                        <CiClock2 className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Mon – Fri 9.00 – 17.00
                        </div>
                      </div>

                      <div className="group">
                        <a
                          href="tel:880 0280689051"
                          className="flex items-center gap-[6px] text-white group-hover:text-secondary"
                        >
                          <FaMobileAlt className="text-white group-hover:text-secondary " />
                          <span className="text-[10px] lg:text-xs">
                            (02) 8068 9051
                          </span>
                        </a>
                      </div>

                      <div className="group">
                        <a
                          href="mailto:info@mieducation.com.au"
                          className="flex items-center gap-[6px] text-white  "
                        >
                          <HiOutlineEnvelope className="text-white group-hover:text-secondary" />
                          <span className="text-[10px] lg:text-xs group-hover:text-secondary">
                            info@mieducation.com.au
                          </span>
                        </a>
                      </div>

                      <div className="md:flex items-center gap-[6px] hidden">
                        <FaRegMap className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Suite: 1, 15 Delawney, Balcatta, Western
                          Australia-6021, Australia.
                        </div>
                      </div>
                    </>
                  )}
                  {address === "wollongong" && (
                    <>
                      <div className="hidden md:flex items-center gap-[6px] ">
                        <CiClock2 className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Mon – Fri 9.00 – 17.00
                        </div>
                      </div>

                      <div className="group">
                        <a
                          href="tel:880 0280689051"
                          className="flex items-center gap-[6px] text-white group-hover:text-secondary"
                        >
                          <FaMobileAlt className="text-white group-hover:text-secondary " />
                          <span className="text-[10px] lg:text-xs">
                            (02) 8068 9051
                          </span>
                        </a>
                      </div>

                      <div className="group">
                        <a
                          href="mailto:info@mieducation.com.au"
                          className="flex items-center gap-[6px] text-white  "
                        >
                          <HiOutlineEnvelope className="text-white group-hover:text-secondary" />
                          <span className="text-[10px] lg:text-xs group-hover:text-secondary">
                            info@mieducation.com.au
                          </span>
                        </a>
                      </div>

                      <div className="md:flex items-center gap-[6px] hidden">
                        <FaRegMap className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Level 2, 175 Keira Street, Wollongong- 2500 NSW,
                          Australia
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="hidden md:block">
                  <Select
                    labelInValue
                    defaultValue={{ value: "sydney", label: "Sydney" }}
                    style={{
                      width: 90,
                      height: "100%",
                      border: 0,
                      borderRadius: 0,
                    }}
                    className="nav_top"
                    onChange={(e: any) => setAddress(e.value)}
                    options={[
                      {
                        value: "sydney",
                        label: "Sydney",
                      },
                      {
                        value: "perth",
                        label: "Perth",
                      },
                      {
                        value: "wollongong",
                        label: "Wollongong",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-grey">
          <div className="container">
            <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[230px_auto_auto] justify-between items-center relative">
              {/* <div>
                <div className="absolute top-0 left-0 hidden lg:block">
                  <Link href="/">
                    <Image
                      src="/misc/logo.png"
                      alt="Study International Logo"
                      width={scroll ? 132 : 240}
                      height={128}
                      className="transition-all duration-500"
                    />
                  </Link>
                </div>
                <Link href="/">
                  <Image
                    src="/misc/logo.png"
                    alt="Study International Logo"
                    width={120}
                    height={50}
                    blurDataURL="/misc/logo.png"
                    placeholder="blur"
                  />
                </Link>
              </div> */}

              <div>
                <Link href="/">
                  <h4 className="mb-0 h5">Emdadul Hoque</h4>
                </Link>
              </div>

              {navData && navData?.length > 0 && (
                <nav className="hidden lg:block font-medium">
                  <ul className="flex items-center">
                    {navData?.map((item: any, index) => {
                      let p: any;
                      if (item.link == path && item.link != "/#") {
                        p = true;
                      }
                      item?.children?.map((itm: any) => {
                        if (itm.link == path && itm.link != "/#") {
                          p = true;
                        }
                        itm?.grandChld?.map((abc: any) => {
                          if (abc.link == path && abc?.link != "/#") {
                            p = true;
                          }
                        });
                      });

                      if (item?.isHidden) {
                        return null;
                      } else
                        return (
                          <li
                            key={index}
                            className={`relative text-black border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary ${
                              styles.has_submenu
                            } ${p ? "border-secondary text-secondary" : ""}`}
                          >
                            {item?.link ? (
                              <Link
                                href={item.link}
                                className="flex items-center gap-2  cursor-pointer px-3 py-6 hover:text-inherit "
                              >
                                <span className="2lg:text-[15px] xl:text-base">
                                  {item?.title}
                                </span>
                                {item?.children && <FiChevronDown />}
                              </Link>
                            ) : (
                              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit">
                                <span className="2lg:text-[15px] xl:text-base">
                                  {item?.title}
                                </span>
                                {item?.children && <FiChevronDown />}
                              </div>
                            )}
                            {item?.children && item?.children?.length > 0 && (
                              <div
                                className={`absolute bg-white p-4 rounded-lg shadow-xl  ${
                                  styles.submenu
                                } ${
                                  item?.isColTwo
                                    ? "grid grid-cols-2 gap-x-[60px]"
                                    : ""
                                }`}
                              >
                                {item?.children?.map((cldn: any, i: number) => {
                                  return (
                                    <div key={i} className="relative">
                                      <div
                                        className={`overflow-hidden group ${
                                          p
                                            ? "border-secondary text-secondary"
                                            : ""
                                        }`}
                                      >
                                        <Link
                                          href={cldn?.link}
                                          className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                        >
                                          <span className="w-5 h-[2px] bg-black"></span>
                                          <span>{cldn?.title}</span>
                                        </Link>

                                        {cldn?.grandChld && (
                                          <div className="min-w-[200px] left-[108%] top-0 absolute bg-white p-4 rounded-r-lg shadow-sm	 invisible group-hover:visible transition-all">
                                            {cldn?.grandChld?.map(
                                              (index: any, i: any) => {
                                                return (
                                                  <div
                                                    key={i}
                                                    className="relative "
                                                  >
                                                    <div className="overflow-hidden ">
                                                      <Link
                                                        href={index?.link}
                                                        className="whitespace-nowrap flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition "
                                                      >
                                                        <span className="w-5 h-[2px] bg-black"></span>
                                                        {index?.title}
                                                      </Link>
                                                    </div>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </li>
                        );
                    })}
                  </ul>
                </nav>
              )}

              <div className="flex gap-4">
                <Link href="#" className="btn btn-primary rounded-md">
                  Download CV
                </Link>
                <div className="block lg:hidden order-2">
                  <button
                    className={`text-2xl mt-1`}
                    onClick={() => setOpen(true)}
                  >
                    <CgMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Drawer
        title={
          <div>
            <Link href="/">
              <Image
                src="/misc/logo-2.png"
                alt="Study International Logo"
                width={120}
                height={120}
                className="transition-all duration-500"
              />
            </Link>
          </div>
        }
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        className="custom_nav_drawer"
      >
        <div
          className="flex flex-col overflow-auto"
          style={{ height: "calc(100vh - 60px" }}
        >
          <div>
            <>
              {navData && navData?.length > 0 ? (
                <div className="flex flex-col">
                  {navData?.map((item: any, i: any) => {
                    return (
                      <Fragment key={i}>
                        <div key={i} className="relative">
                          {item?.children && item?.children?.length > 0 ? (
                            <>
                              {item?.isHidden ? null : (
                                <div
                                  onClick={() => toggle(i)}
                                  className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                >
                                  <span className="text-left text-base font-medium">
                                    {item.title}
                                  </span>
                                  {item?.children && (
                                    <>
                                      {selected == i ? (
                                        <FiChevronUp className="shrink-0" />
                                      ) : (
                                        <FiChevronDown className="shrink-0" />
                                      )}
                                    </>
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <Link
                                href={item?.link || "#"}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between w-full py-2 z-10 gap-1"
                              >
                                <span className="text-left text-base font-medium">
                                  {item.title}
                                </span>
                              </Link>
                            </>
                          )}

                          <div>
                            {selected == i && (
                              <ul>
                                {item.children?.map((cldn: any, i: any) => {
                                  return (
                                    <li key={i} onClick={() => setOpen(false)}>
                                      <Link
                                        href={cldn?.link || "#"}
                                        className="flex p-2 text-base font-medium"
                                      >
                                        {cldn?.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              ) : null}
            </>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
