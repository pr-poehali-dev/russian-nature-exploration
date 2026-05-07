import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useRef, useState, useEffect, useMemo } from "react"
import * as THREE from "three"

const NetworkSphere = () => {
  const groupRef = useRef<THREE.Group>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const ringsRef = useRef<THREE.Group>(null)
  const pulseRef = useRef<THREE.Points>(null)

  // Smooth mouse tracking
  const mouse = useRef({ x: 0, y: 0 })
  const smoothMouse = useRef({ x: 0, y: 0 })

  const { gl } = useThree()

  useEffect(() => {
    const canvas = gl.domElement.parentElement || window
    const onMove = (e: Event) => {
      const ev = e as MouseEvent
      mouse.current.x = (ev.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(ev.clientY / window.innerHeight - 0.5) * 2
    }
    const onTouch = (e: Event) => {
      const ev = e as TouchEvent
      if (ev.touches.length > 0) {
        mouse.current.x = (ev.touches[0].clientX / window.innerWidth - 0.5) * 2
        mouse.current.y = -(ev.touches[0].clientY / window.innerHeight - 0.5) * 2
      }
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("touchmove", onTouch)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("touchmove", onTouch)
    }
  }, [gl])

  const nodesGeometry = useMemo(() => {
    const count = 180
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const r = 1.52
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      sizes[i] = Math.random() * 3 + 1.5
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
    return geo
  }, [])

  const linesGeometry = useMemo(() => {
    const positions: number[] = []
    const nodePositions = nodesGeometry.attributes.position.array as Float32Array
    const count = nodePositions.length / 3
    for (let i = 0; i < 60; i++) {
      const a = Math.floor(Math.random() * count)
      const b = Math.floor(Math.random() * count)
      positions.push(
        nodePositions[a * 3], nodePositions[a * 3 + 1], nodePositions[a * 3 + 2],
        nodePositions[b * 3], nodePositions[b * 3 + 1], nodePositions[b * 3 + 2],
      )
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3))
    return geo
  }, [nodesGeometry])

  const pulseGeo = useMemo(() => {
    const count = 40
    const positions = new Float32Array(count * 3)
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geo
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Smooth lerp mouse
    smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.05
    smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.05

    if (groupRef.current) {
      // Base auto-rotation + mouse tilt
      groupRef.current.rotation.y = t * 0.18 + smoothMouse.current.x * 0.55
      groupRef.current.rotation.x = Math.sin(t * 0.07) * 0.15 + smoothMouse.current.y * 0.35
    }

    if (wireRef.current) {
      // Pulse scale slightly on mouse movement
      const activity = Math.abs(mouse.current.x) + Math.abs(mouse.current.y)
      const s = 1 + Math.sin(t * 0.6) * 0.015 + activity * 0.012
      wireRef.current.scale.setScalar(s)
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.25 - smoothMouse.current.x * 0.2
      ringsRef.current.rotation.x = t * 0.12 + smoothMouse.current.y * 0.2
    }

    if (pulseRef.current) {
      const pos = pulseRef.current.geometry.attributes.position.array as Float32Array
      const count = pos.length / 3
      // Speed up orbits on mouse activity
      const speed = 0.5 + (Math.abs(smoothMouse.current.x) + Math.abs(smoothMouse.current.y)) * 0.4
      for (let i = 0; i < count; i++) {
        const angle = t * speed + (i / count) * Math.PI * 2
        const orbit = 1.9 + Math.sin(i * 1.3) * 0.3
        const tilt = (i / count) * Math.PI
        pos[i * 3] = orbit * Math.cos(angle) * Math.sin(tilt)
        pos[i * 3 + 1] = orbit * Math.sin(angle * 0.7 + i) * 0.4
        pos[i * 3 + 2] = orbit * Math.sin(angle) * Math.cos(tilt * 0.5)
      }
      pulseRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshBasicMaterial color="#AAFF00" wireframe transparent opacity={0.13} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial color="#0a1a00" transparent opacity={0.55} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.008, 8, 120]} />
        <meshBasicMaterial color="#AAFF00" transparent opacity={0.35} />
      </mesh>

      <mesh rotation={[Math.PI / 3, 0.4, 0]}>
        <torusGeometry args={[1.72, 0.005, 8, 120]} />
        <meshBasicMaterial color="#AAFF00" transparent opacity={0.2} />
      </mesh>

      <group ref={ringsRef}>
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[1.3, 0.004, 8, 80]} />
          <meshBasicMaterial color="#AAFF00" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[1.1, 0.003, 8, 80]} />
          <meshBasicMaterial color="#88cc00" transparent opacity={0.2} />
        </mesh>
      </group>

      <points geometry={nodesGeometry}>
        <pointsMaterial color="#AAFF00" size={0.04} transparent opacity={0.9} sizeAttenuation />
      </points>

      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#AAFF00" transparent opacity={0.12} />
      </lineSegments>

      <points ref={pulseRef} geometry={pulseGeo}>
        <pointsMaterial color="#ccff44" size={0.055} transparent opacity={0.95} sizeAttenuation />
      </points>
    </group>
  )
}

const BackgroundParticles = () => {
  const ref = useRef<THREE.Points>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  const geo = useMemo(() => {
    const count = 300
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    return g
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02 + mouse.current.x * 0.04
      ref.current.rotation.x = mouse.current.y * 0.03
    }
  })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color="#AAFF00" size={0.018} transparent opacity={0.25} sizeAttenuation />
    </points>
  )
}

export const Hero3DWebGL = () => {
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setTitleVisible(true), 300)
    const t2 = setTimeout(() => setSubtitleVisible(true), 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>

      {/* Подпись сверху справа — как на картинке */}
      <div
        className={`absolute top-24 right-10 z-[60] pointer-events-none text-right ${subtitleVisible ? "fade-in-subtitle" : ""}`}
        style={{ opacity: subtitleVisible ? undefined : 0 }}
      >
        <p className="text-white/50 text-xs md:text-sm tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          ©IT-ТЕХНОЛОГИИ
        </p>
        <p className="text-white/50 text-xs md:text-sm tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          С ИНДИВИДУАЛЬНЫМ ПОДХОДОМ
        </p>
      </div>

      {/* Главный заголовок + кнопка — внизу по центру */}
      <div className="h-screen w-full absolute z-[60] pointer-events-none flex flex-col items-center justify-end pb-8 px-4 gap-6">
        <div
          className={titleVisible ? "fade-in" : ""}
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.5rem, 9vw, 9rem)",
            color: "#AAFF00",
            letterSpacing: "-0.03em",
            lineHeight: 1,
            opacity: titleVisible ? undefined : 0,
            whiteSpace: "nowrap",
          }}
        >
          custom solutions
        </div>

      </div>

      <Canvas
        flat
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        style={{ background: "#000000" }}
      >
        <BackgroundParticles />
        <NetworkSphere />
      </Canvas>
    </div>
  )
}

export default Hero3DWebGL