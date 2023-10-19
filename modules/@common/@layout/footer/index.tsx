import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-primary z-10">
      <div className="container">
        <div className="py-8 pb-8">
          <p className="mb-0 text-white text-center">
            Copyright © {new Date().getFullYear()} Emdadul Hoque. All rights
            reserved. Design & Developed by:{" "}
            <a
              href="#"
              target="_blank"
              rel="nofollow"
              className="hover:text-secondary"
            >
              Emdadul Hoque
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
