import { useMemo } from 'react'
import * as THREE from 'three'

function Mountains() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()

    shape.moveTo(-10, -2)

    shape.lineTo(-10, 0.2)
    shape.lineTo(-8.5, 0.7)
    shape.lineTo(-7.2, 0.25)
    shape.lineTo(-5.8, 1.1)
    shape.lineTo(-4.4, 0.35)
    shape.lineTo(-3.1, 0.8)
    shape.lineTo(-1.8, 0.15)
    shape.lineTo(-0.5, 0.65)
    shape.lineTo(0.8, 0.2)
    shape.lineTo(2.1, 1.15)
    shape.lineTo(3.5, 0.45)
    shape.lineTo(4.8, 0.85)
    shape.lineTo(6.2, 0.3)
    shape.lineTo(7.8, 0.95)
    shape.lineTo(10, 0.35)

    shape.lineTo(10, -2)
    shape.closePath()

    return new THREE.ShapeGeometry(shape)
  }, [])

  return (
    <mesh
      geometry={geometry}
      position={[0, -0.35, -3.5]}
    >
      <meshBasicMaterial
        color="#8589a8"
        transparent
        opacity={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default Mountains