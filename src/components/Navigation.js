import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useNavigate, useLocation } from "react-router-dom"
import Modal from './Modal'

export default function Navigation() {
  const [show, setShow] = useState()

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand style={{fontSize: '2.5rem', cursor: 'pointer'}} className="m-0 p-0" onClick={() => navigate('/')}>🚗</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <div style={{cursor: 'pointer'}} onClick={() => setShow(true)} className={`${location.pathname.includes('/browse') && 'active'} nav-link`}>
            Instructions
          </div>
          {show && <Modal show={show} setShow={setShow}>About</Modal>}
          <div style={{cursor: 'pointer'}} onClick={() => navigate('/about')} className={`${location.pathname.includes('/browse') && 'active'} nav-link`}>
            About
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
