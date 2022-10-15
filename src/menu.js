import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom"

export default function menu() {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [error, setError] = useState('')
  const [show, setShow] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    // if (localStorage.getItem('wins')) {
    //   setWins(localStorage.getItem('wins'))
    // }
    if (!localStorage.getItem('name')) {
      setShow(true)
    } else {
      setName(localStorage.getItem('name'))
    }
  }, [])

  function handleName(e) {
    if (e.target.value.length > 11) {
      setNameError('Names must be max 12 characters')
    } else if (e.target.value.length == 0) {
      setNameError('Please Enter a Name')
      setName('')
    } else {
      setNameError(null)
      const char = e.target.value.slice(-1)
      if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z' || char == ' ') {
        localStorage.setItem('name', e.target.value)
        setName(e.target.value)
      } else {
        setNameError('Only letter characters Allowed')
      }
    }
  }

  function play() {
    navigate('/game')
  }

  return (
    <>
      <Button className="nameButton ms-auto d-block" onClick={() => setShow(true)}>{`${name ? name : 'Click to Enter Name'}`}</Button>
      <Button onClick={play}>Play</Button>
      <Modal show={show} onHide={() => { if (name.length > 0) setShow(false) }}>
        <Modal.Header>
          <Modal.Title>Enter a Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger">{nameError}</p>
          <input className="in-control" value={name} placeholder="Name" onChange={handleName} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="w-100" disabled={name.length == 0} onClick={() => setShow(false)}>Play</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
