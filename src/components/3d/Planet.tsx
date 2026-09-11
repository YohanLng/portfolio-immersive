import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function createPlanetTexture() {
  const size = 512

  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  const context = canvas.getContext('2d')

  if (!context) {
    return null
  }

  const imageData = context.createImageData(size, size)
  const data = imageData.data

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const index = (y * size + x) * 4

      const noise =
        Math.sin(x * 0.035) *
        Math.sin(y * 0.027) *
        18

      const detail =
        Math.sin(x * 0.11 + y * 0.04) *
        Math.cos(y * 0.08) *
        8

      const value = Math.max(
        0,
        Math.min(
          255,
          112 + noise + detail,
        ),
      )

      data[index] = value
      data[index + 1] = value
      data[index + 2] = value + 8
      data[index + 3] = 255
    }
  }

  context.putImageData(imageData, 0, 0)

  const texture = new THREE.CanvasTexture(canvas)

  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.ClampToEdgeWrapping

  return texture
}

function Planet() {
  const planetRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)

  const planetTexture = useMemo(
    () => createPlanetTexture(),
    [],
  )

  useFrame((state) => {
    if (!planetRef.current || !ringRef.current) {
      return
    }

    planetRef.current.rotation.y += 0.0015
    ringRef.current.rotation.z += 0.0005

    const targetX = state.pointer.x * 0.12
    const targetY = state.pointer.y * 0.08

    planetRef.current.rotation.x = THREE.MathUtils.lerp(
      planetRef.current.rotation.x,
      targetY,
      0.03,
    )

    planetRef.current.rotation.z = THREE.MathUtils.lerp(
      planetRef.current.rotation.z,
      -targetX,
      0.03,
    )
  })

  return (
    <group>
      {/* PLANÈTE */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.65, 96, 96]} />

        <meshStandardMaterial
          map={planetTexture ?? undefined}
          color="#a4a7bd"
          roughness={0.82}
          metalness={0.04}
          bumpMap={planetTexture ?? undefined}
          bumpScale={0.12}
        />
      </mesh>

      {/* ANNEAU */}
      <mesh
        ref={ringRef}
        rotation={[1.12, 0.18, 0]}
      >
        <torusGeometry
          args={[2.05, 0.018, 16, 128]}
        />

        <meshBasicMaterial
          color="#ffd8d0"
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* ATMOSPHÈRE */}
      <mesh scale={1.035}>
        <sphereGeometry args={[1.65, 64, 64]} />

      <meshBasicMaterial
        color="#c8c5ff"
        transparent
        opacity={0.055}
        side={THREE.BackSide}
      />
      </mesh>
    </group>
  )
}

export default Planet