import * as THREE from 'three'
import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, Float, Html, OrbitControls } from '@react-three/drei'
import { MathUtils } from 'three'

const material = new THREE.MeshStandardMaterial()
const geometries = [
  { geometry: new THREE.TetrahedronBufferGeometry(2) },
  { geometry: new THREE.CylinderBufferGeometry(0.8, 0.8, 2, 32) },
  { geometry: new THREE.ConeGeometry(1.1, 1.7, 32) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.IcosahedronBufferGeometry(2) },
  { geometry: new THREE.TorusBufferGeometry(1.1, 0.35, 16, 32) },
  { geometry: new THREE.OctahedronGeometry(2) },
  { geometry: new THREE.SphereBufferGeometry(1.5, 32, 32) },
  { geometry: new THREE.BoxBufferGeometry(2.5, 2.5, 2.5) }
]

function Geometries() {
  const n = 40
  const randProps = useMemo(() => Array.from({ length: n }, () => geometries[Math.floor(Math.random() * geometries.length)]), [])
  return randProps.map((prop) => {
    return <Float></Float>
  })
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 22.5] }}>
      <hemisphereLight groundColor="red" />
      <Float floatIntensity={0} rotationIntensity={0}>
        <Html style={{ userSelect: 'none' }} castShadow receiveShadow occlude="blending" transform>
          <iframe title="embed" width={700} height={900} src="https://rnd.vu.studio/vscontrol/" frameBorder={0} />
        </Html>
      </Float>
      <Geometries />
      <Environment background preset="dawn" blur={0.8} />
      <ContactShadows position={[0, -9, 0]} opacity={0.7} scale={40} blur={1} />
      <OrbitControls />
    </Canvas>
  )
}
