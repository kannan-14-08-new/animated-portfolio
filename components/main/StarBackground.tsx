"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { inSphere } from "maath/random";

export function StarBackground() {
  const ref = useRef<THREE.Points>(null);

  // Explicitly type as Float32Array
  const [sphere] = useState<Float32Array>(() =>
    inSphere(new Float32Array(6000), { radius: 1.2 }) as Float32Array
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
 <Points
  ref={ref}
  stride={3}
  positions={sphere as Float32Array}
  frustumCulled
>
  <PointMaterial
    transparent
    color="#fff"
    size={0.002}
    sizeAttenuation
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
