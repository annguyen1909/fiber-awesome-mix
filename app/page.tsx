'use client'
import dynamic from "next/dynamic"
import Model from "../components/Model"
import { useState } from "react";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

export default function Home() {
  const [animation, setAnimation] = useState<string>('03_Sphere_bot_Open');
  return (
    <main className="h-full">
      <Scene/>
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <select value={animation} onChange={(e) => setAnimation(e.target.value)}>
          <option value="04_Sphere_bot_Attack">Attack</option>
          <option value="07_Sphere_bot_Jump">Jump</option>
          <option value="01_Sphere_bot_Roll">Roll</option>
        </select>
      </div>
    </main>
  )
}
