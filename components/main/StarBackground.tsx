"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

export function StarBackground(props: any) {
  // Ref typed as THREE.Points or null initially
  const ref = useRef<THREE.Points>(null);

  // Ensure positions length is divisible by 3 for x,y,z point coords
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(6000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      // Adjust rotation speed for visible movement
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}
