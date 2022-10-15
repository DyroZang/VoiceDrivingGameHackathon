import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom"

export default function menu() {
  const navigate = useNavigate();

  function click() {
    console.log('ok')
    navigate('/game')
  }
  return (
    <>
      <Button onClick={click}>click</Button>
    </>
  )
}
