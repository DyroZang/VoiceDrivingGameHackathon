import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Voice from "./Voice";
import { useState } from 'react'

export default function CustomModal({ show, setShow, state, setState, resetState}) {
  const [counter, setCounter] = useState(3)
  function startGame() {
    setShow(false)
    setState('play')
  }

  function resetGame() {
    setState('start')
    setShow(false)
    resetState()
  }

  return (
    <Modal show={show} onHide={startGame}>
      <Modal.Header closeButton>
        {state === 'start' && <Modal.Title>How to play the game</Modal.Title>}
        {state === 'won' && <Modal.Title>You have arrived at your destination!</Modal.Title>}
        {state === 'lost' && <Modal.Title>You crashed!</Modal.Title>}
      </Modal.Header>
      {state === 'start' &&
        <Modal.Body>
          <b>Rules of the game:</b>
          <br></br>
          <br></br>
          <ul>
            <li>You have 1 minute to finish the game</li>
            <li>You have 2 commands</li>
          </ul>

          <b>Commands:</b>
          <br></br>
          <br></br>
          <ul>
            <li>"Up"</li>
            <li>"Right"</li>
            <li>"Down"</li>
            <li>"Left"</li>
            <li>"Stop"</li>
          </ul>
          <Voice testing />
        </Modal.Body>
      }
      {state === 'won' &&
        <Modal.Body>
          <b>PLACEHOLDER</b>
          <br></br>
          <br></br>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </Modal.Body>
      }
      {state === 'lost' &&
        <Modal.Body>
          <b>PLACEHOLDER</b>
          <br></br>
          <br></br>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </Modal.Body>
      }
      <Modal.Footer>
        {state === 'lost' && <Button onClick={resetGame} className="w-100" variant="success"> Play Again</Button>}
        {state === 'won' && <Button onClick={resetGame} className="w-100" variant="success"> Play Again</Button>}
      </Modal.Footer>
    </Modal>
  );
}
