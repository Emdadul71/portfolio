"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import PointCircle from "./point-circle";
import { OrbitControls } from "@react-three/drei";
import HomeHero from "../home/home-hero";

const About = () => {
  return (
    <section className="relative h-[calc(100vh-75px)]">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </section>
  );
};

export default About;
