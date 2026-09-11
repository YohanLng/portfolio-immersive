import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import FloatingRock from './FloatingRock'
import Planet from './Planet'
import './Scene.css'

function Scene() {
  return (
    <div className="scene">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 40,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Suspense fallback={null}>
          {/* Lumière principale */}
          <ambientLight intensity={1.8} />

          {/* Lumière chaude */}
          <pointLight
            position={[4, 2, 4]}
            intensity={30}
            distance={10}
            color="#ffd6c9"
          />

          {/* Lumière froide */}
          <pointLight
            position={[-4, 1, 2]}
            intensity={15}
            distance={10}
            color="#bfc8ff"
          />

          <Planet />
          <FloatingRock
            position={[-1.9, 1.35, 0]}
            scale={0.75}
            rotation={[0.4, 0.2, 0.6]}
            speed={0.8}
          />

          <FloatingRock
            position={[1.8, -1.25, 0.4]}
            scale={0.6}
            rotation={[0.8, 0.3, 0.2]}
            speed={1.1}
          />

          <FloatingRock
            position={[-2.4, -0.4, -0.3]}
            scale={0.38}
            rotation={[0.2, 0.7, 0.4]}
            speed={0.7}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene