import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"

useGLTF.preload("/sphere_bot.glb")

type ModelProps = {
  selectedAnimation: string;
};

export default function  Model({ selectedAnimation }: ModelProps) {
  const group = useRef<Group>(null)
  const { nodes, materials, animations, scene } = useGLTF(
    "/sphere_bot.glb"
  )
  const { actions, clips } = useAnimations(animations, scene)
  const scroll = useScroll()

  useEffect(() => {
    // Pause all actions
    Object.values(actions).forEach(action => action.paused = true);
    
    // Play the selected animation
    const selectedAction = actions[selectedAnimation];
    if (selectedAction) {
      selectedAction.play().paused = false;
    }
  }, [selectedAnimation, actions]);

  useFrame(() => {
    const selectedAction = actions[selectedAnimation];
    if (selectedAction) {
      selectedAction.time = (selectedAction.getClip().duration * scroll.offset) / 4;
    }
  });
  return (
    <group ref={group}>
      <primitive
       object={scene}
       position={[2, 0, 0]}  />
    </group>
  )
}
