import { MeshReflectorMaterial } from '@react-three/drei'

function ReflectiveFloor() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1.75, 0]}
    >
      <planeGeometry args={[20, 20]} />

      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={0.7}
        roughness={0.82}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#74788f"
        metalness={0.12}
      />
    </mesh>
  )
}

export default ReflectiveFloor