"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import Model2 from "./Model2"
import { Suspense, useState } from "react"
import { useProgress, Html, ScrollControls, Select } from "@react-three/drei"


function Loader() {
  const { progress, active } = useProgress()
  

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  const [animation, setAnimation] = useState<string>('03_Sphere_bot_Open');
  return (
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
        <directionalLight position={[-5, -5, 5]} intensity={40} />
        <Suspense fallback={<Loader />}>
          <ScrollControls damping={0.5} pages={8}>
            <Model selectedAnimation = {animation}/>
            <Model2/>
          </ScrollControls>
        </Suspense>
      </Canvas>
  )
}
