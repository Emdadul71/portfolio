import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Point from "../point";
import { pointsInner, pointsOuter } from "@/helpers/utils-2";

const PointCircle = () => {
  const ref = useRef<any>(null);

  useFrame(({ clock }: any) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });
  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}

      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

export default PointCircle;
