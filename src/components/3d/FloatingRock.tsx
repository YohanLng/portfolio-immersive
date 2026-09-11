import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface FloatingRockProps {
  position: [number, number, number]
  scale?: number
  rotation?: [number, number, number]
  speed?: number
}

function FloatingRock({
  position,
  scale = 1,
  rotation = [0, 0, 0],
  speed = 1,
}: FloatingRockProps) {
  const rockRef = useRef<THREE.Mesh>(null)

  const initialY = position[1]

  useFrame((state) => {
    if (!rockRef.current) return

    const time = state.clock.getElapsedTime()

    rockRef.current.rotation.x += 0.0015 * speed
    rockRef.current.rotation.y += 0.002 * speed

    rockRef.current.position.y =
      initialY + Math.sin(time * 0.5 * speed) * 0.06
  })

  return (
    <mesh
      ref={rockRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <icosahedronGeometry args={[0.55, 1]} />

      <meshStandardMaterial
        color="#46495b"
        roughness={0.92}
        metalness={0.02}
      />
    </mesh>
  )
}

export default FloatingRock