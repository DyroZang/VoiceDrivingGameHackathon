import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// import * as THREE from 'three'
import backgroundImg from './assets/maps.png'

function Box({x, y}) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    if (x === 'right') {
      if (mesh.current.position.x < 3.5) {
        mesh.current.position.x += 0.01
      }
    } else if (x === 'left') {
      if (mesh.current.position.x > -3.5) {
        mesh.current.position.x -= 0.01
      }
    } else if (y === 'up') {
      if (mesh.current.position.y < 3.5) {
        mesh.current.position.y += 0.01
      }
    } else if (y === 'down') {
      if (mesh.current.position.y > -3.5) {
        mesh.current.position.y -= 0.01
      }
    }
    // var rect = document.query.s.getBoundingClientRect();
    // console.log(mesh.current.position)
  })
  return (
    <mesh
      ref={mesh}
      scale={0.1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Circle({goal, x, y, z, position}, props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // console.log(position)
  useFrame((state, delta) => {
    mesh.current.rotation.z += 0.01
  })
  return (
    <mesh
      position={position}
      ref={mesh}
      scale={0.15}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <circleGeometry args={[.8, 1, 0]} />
      <meshStandardMaterial color={goal ? 'green' : 'red'} />
    </mesh>
  )
}

export default function Game() {
  const [peds, setPeds] = useState([])
  const [y, setY] = useState('up')
  const [x, setX] = useState()

  useEffect(() => {

    const arr = Array.from(Array(25).keys())
    for (let i = 0; i < 25; i++) {
      const isNeg = Math.round( Math.random()*10 )
      const isNeg2 = Math.round( Math.random()*10 )
      
      let x = Math.round( Math.random()*3 )
      if (isNeg > 5) {
        x *= -1
      }
      let y = Math.round( Math.random()*3 )
      if (isNeg2 > 5) {
        y *= -1
      }
      const z = Math.round( Math.random()*3 )
      // console.log(isNeg)

      arr[i] = {x, y, z}
      setPeds(arr)
    }

    // console.log(arr)


    if (typeof window !== 'undefined') {
      const handleKeyDown = (e) => {
        // console.log('key', e.key)
        if (e.key === 'ArrowUp') {
          setY('up')
          setX()
        } else if (e.key === 'ArrowDown') {
          setY('down')
          setX()
        } else if (e.key === 'ArrowLeft') {
          setY()
          setX('left')
        } else if (e.key === 'ArrowRight') {
          setY()
          setX('right')
        } else if (e.key === ' ') {
          setY()
          setX()
        }
      }
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])
  useEffect(() => {
    console.log(peds)
  }, [peds])

  return (
    <div
      className="menuPage"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Box position={[0, 0, 0]} x={x} y={y} />
        {peds && peds.map((ped, index) => (
           <Circle key={index} position={[ped.x, ped.y, ped.z]} />
        ))}
      </Canvas>
    </div>
  )
}

